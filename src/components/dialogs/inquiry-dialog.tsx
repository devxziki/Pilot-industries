"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle, Mail, Clock, ShieldCheck, ChevronDown, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Context for global dialog state
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
      <InquiryDialog isOpen={isOpen} setIsOpen={setIsOpen} showToast={showToast} />
      <Toast toast={toast} setToast={setToast} />
    </InquiryContext.Provider>
  )
}

// Custom Toast Component
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

// Form validation types
interface FormState {
  fullName: string
  phoneNumber: string
  emailAddress: string
  companyName: string
  cityState: string
  product: string
  quantity: string
  unit: string
  specifyUnit: string
  message: string
}

interface FormErrors {
  fullName?: string
  phoneNumber?: string
  emailAddress?: string
  quantity?: string
  specifyUnit?: string
}

const initialFormState: FormState = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  companyName: "",
  cityState: "",
  product: "POP Gypsum",
  quantity: "",
  unit: "BAGS",
  specifyUnit: "",
  message: "",
}

// Inquiry Dialog Component
function InquiryDialog({
  isOpen,
  setIsOpen,
  showToast,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  showToast: (message: string) => void
}) {
  const [formData, setFormData] = React.useState<FormState>(initialFormState)
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Auto-focus input reference for focus trap
  const firstInputRef = React.useRef<HTMLInputElement>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === "phoneNumber") {
      // Only accept numbers
      const numbersOnly = value.replace(/\D/g, "")
      if (numbersOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numbersOnly }))
        if (errors.phoneNumber) {
          setErrors((prev) => ({ ...prev, phoneNumber: undefined }))
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit Indian mobile number"
    }

    if (formData.emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address"
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required"
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      newErrors.quantity = "Please enter a valid quantity"
    }

    if (formData.unit === "OTHER" && !formData.specifyUnit.trim()) {
      newErrors.specifyUnit = "Please specify the unit"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API submit
      setTimeout(() => {
        console.log("--- Premium Inquiry Record ---")
        console.log("Full Name:    ", formData.fullName)
        console.log("Phone:        ", formData.phoneNumber)
        console.log("Email:        ", formData.emailAddress || "N/A")
        console.log("Company:      ", formData.companyName || "N/A")
        console.log("Location:     ", formData.cityState || "N/A")
        console.log("Product:      ", formData.product)
        console.log("Quantity:     ", formData.quantity)
        console.log("Unit:         ", formData.unit === "OTHER" ? formData.specifyUnit : formData.unit)
        console.log("Message:      ", formData.message || "N/A")
        console.log("------------------------------")

        setIsSubmitting(false)
        setIsOpen(false)
        showToast("Thank you! Your inquiry has been recorded. Our team will contact you shortly.")
        setFormData(initialFormState)
        setErrors({})
      }, 1200)
    }
  }

  const handleCancel = () => {
    setIsOpen(false)
    setFormData(initialFormState)
    setErrors({})
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !isSubmitting && setIsOpen(open)}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Backdrop with smooth blur animation */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
              />
            </Dialog.Overlay>

            {/* Dialog Content wrapper */}
            <Dialog.Content asChild>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="w-full max-w-xl bg-surface border border-border rounded-2xl shadow-2xl p-6 md:p-8 pointer-events-auto overflow-hidden max-h-[92vh] flex flex-col scrollbar-thin"
                >
                  {/* Header */}
                  <div className="relative pb-4 border-b border-border">
                    <Dialog.Title className="text-2xl font-bold font-heading text-foreground">
                      Request a Quote
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-muted-foreground mt-1">
                      Fill in your requirements and our team will contact you shortly.
                    </Dialog.Description>

                    <Dialog.Close asChild>
                      <button
                        disabled={isSubmitting}
                        onClick={handleCancel}
                        className="absolute right-0 top-0 text-muted-foreground hover:text-foreground transition-all duration-200 p-1.5 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50"
                        aria-label="Close dialog"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Form Container with vertical scroll if screen is small */}
                  <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-thin">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajesh Kumar"
                          disabled={isSubmitting}
                          className={cn(
                            "w-full px-4 py-2.5 rounded-lg border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm",
                            errors.fullName ? "border-red-500 focus:ring-red-100" : "border-border"
                          )}
                        />
                        {errors.fullName && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Phone Number <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium select-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="98765 43210"
                            disabled={isSubmitting}
                            className={cn(
                              "w-full pl-12 pr-4 py-2.5 rounded-lg border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm",
                              errors.phoneNumber ? "border-red-500 focus:ring-red-100" : "border-border"
                            )}
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          placeholder="rajesh@company.com"
                          disabled={isSubmitting}
                          className={cn(
                            "w-full px-4 py-2.5 rounded-lg border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm",
                            errors.emailAddress ? "border-red-500 focus:ring-red-100" : "border-border"
                          )}
                        />
                        {errors.emailAddress && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> {errors.emailAddress}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Kumar Construction Ltd."
                          disabled={isSubmitting}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* City/State */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleInputChange}
                          placeholder="e.g. Bharuch, Gujarat"
                          disabled={isSubmitting}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm"
                        />
                      </div>

                      {/* Read-Only Product */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Product
                        </label>
                        <input
                          type="text"
                          name="product"
                          value={formData.product}
                          readOnly
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-muted-foreground select-none text-sm cursor-not-allowed font-medium"
                        />
                      </div>
                    </div>

                    {/* Quantity & Unit Selection */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Quantity <span className="text-accent">*</span>
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder="e.g. 500"
                          disabled={isSubmitting}
                          min="1"
                          className={cn(
                            "w-full px-4 py-2.5 rounded-lg border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm",
                            errors.quantity ? "border-red-500 focus:ring-red-100" : "border-border"
                          )}
                        />
                        {errors.quantity && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> {errors.quantity}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Unit <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="unit"
                            value={formData.unit}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm appearance-none cursor-pointer pr-10"
                          >
                            <option value="BAGS">Bags (50 KG)</option>
                            <option value="MT">Metric Tons (MT)</option>
                            <option value="KG">Kilograms (KG)</option>
                            <option value="OTHER">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Conditional specify unit field */}
                    {formData.unit === "OTHER" && (
                      <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Specify Unit <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="specifyUnit"
                          value={formData.specifyUnit}
                          onChange={handleInputChange}
                          placeholder="e.g. Custom Pallets, 25kg bags"
                          disabled={isSubmitting}
                          className={cn(
                            "w-full px-4 py-2.5 rounded-lg border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm",
                            errors.specifyUnit ? "border-red-500 focus:ring-red-100" : "border-border"
                          )}
                        />
                        {errors.specifyUnit && (
                          <p className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> {errors.specifyUnit}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Message Area */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Requirements Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements..."
                        disabled={isSubmitting}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder-muted-foreground/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent text-sm resize-none"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={handleCancel}
                        disabled={isSubmitting}
                        className="px-5 py-2 hover:bg-muted text-sm font-semibold disabled:opacity-50"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="accent"
                        disabled={isSubmitting}
                        className="gap-2 px-6 py-2.5 text-sm font-semibold shadow-lg shadow-accent/15"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Contact Info Footer */}
                  <div className="border-t border-border pt-4 mt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 text-center">
                      Need Immediate Assistance?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      {/* Maheshbhai */}
                      <div className="bg-muted/50 p-2.5 rounded-xl border border-border/50 flex flex-col justify-between">
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground text-[11px] leading-none">Maheshbhai</span>
                          <span className="text-[10px] text-muted-foreground mt-0.5">9974636384</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border/40">
                          <a
                            href="tel:+919974636384"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <Phone className="h-2.5 w-2.5" /> Call
                          </a>
                          <a
                            href="https://wa.me/919974636384"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <MessageCircle className="h-2.5 w-2.5" /> WA
                          </a>
                        </div>
                      </div>

                      {/* Jitubhai */}
                      <div className="bg-muted/50 p-2.5 rounded-xl border border-border/50 flex flex-col justify-between">
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground text-[11px] leading-none">Jitubhai</span>
                          <span className="text-[10px] text-muted-foreground mt-0.5">9974965225</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border/40">
                          <a
                            href="tel:+919974965225"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <Phone className="h-2.5 w-2.5" /> Call
                          </a>
                          <a
                            href="https://wa.me/919974965225"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <MessageCircle className="h-2.5 w-2.5" /> WA
                          </a>
                        </div>
                      </div>

                      {/* Deep Bhai */}
                      <div className="bg-muted/50 p-2.5 rounded-xl border border-border/50 flex flex-col justify-between">
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground text-[11px] leading-none">Deep Bhai</span>
                          <span className="text-[10px] text-muted-foreground mt-0.5">9724584695</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border/40">
                          <a
                            href="tel:+919724584695"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <Phone className="h-2.5 w-2.5" /> Call
                          </a>
                          <a
                            href="https://wa.me/919724584695"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 bg-surface border border-border text-foreground py-1 px-1.5 rounded-lg hover:text-accent hover:border-accent transition-all text-[10px]"
                          >
                            <MessageCircle className="h-2.5 w-2.5" /> WA
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground mt-3 leading-none">
                      <Mail className="h-3 w-3 text-accent" />
                      <span>pilotindustries9697@gmail.com</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
