"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, Loader2 } from "lucide-react"

interface InquiryContextType {
  openInquiry: () => void
  closeInquiry: () => void
}

const InquiryContext = React.createContext<InquiryContextType | undefined>(undefined)

export function useInquiry() {
  const context = React.useContext(InquiryContext)
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider")
  }
  return context
}

interface InquiryProviderProps {
  children: React.ReactNode
}

interface ToastState {
  message: string
  visible: boolean
}

const InquiryDialogContent = dynamic(
  () => import("@/components/dialogs/inquiry-dialog-content").then((m) => ({ default: m.InquiryDialogContent })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <div className="bg-surface border border-border rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
          <p className="text-sm text-muted-foreground font-medium">Loading inquiry form...</p>
        </div>
      </div>
    ),
  }
)

export function InquiryProvider({ children }: InquiryProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [toast, setToast] = React.useState<ToastState>({ message: "", visible: false })

  const openInquiry = () => setIsOpen(true)
  const closeInquiry = () => setIsOpen(false)

  const showToast = (message: string) => {
    setToast({ message, visible: true })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }))
    }, 4500)
  }

  return (
    <InquiryContext.Provider value={{ openInquiry, closeInquiry }}>
      {children}
      <InquiryDialogContent isOpen={isOpen} setIsOpen={setIsOpen} showToast={showToast} />
      <Toast toast={toast} setToast={setToast} />
    </InquiryContext.Provider>
  )
}

function Toast({ toast, setToast }: { toast: ToastState; setToast: React.Dispatch<React.SetStateAction<ToastState>> }) {
  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-xl shadow-2xl border border-primary-light/30 max-w-md pointer-events-auto"
        >
          <CheckCircle className="h-6 w-6 text-accent shrink-0" />
          <div>
            <p className="font-semibold text-sm">Success!</p>
            <p className="text-xs text-white/80 mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
            className="text-white/60 hover:text-white transition-colors p-1 rounded-lg ml-2 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
