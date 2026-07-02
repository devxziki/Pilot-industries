"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import {
  X, ChevronDown, AlertCircle, Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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

export function InquiryDialogContent({
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
  const firstInputRef = React.useRef<HTMLInputElement>(null)

  const validateField = (name: string, value: string, allData?: FormState): string | undefined => {
    const data = allData || formData
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        if (/\d/.test(value)) return "Name should not contain numbers"
        return undefined
      case "phoneNumber":
        if (!value.trim()) return "Phone number is required"
        if (!/^[6-9]\d{9}$/.test(value)) return "Enter a valid 10-digit Indian mobile number"
        return undefined
      case "emailAddress":
        if (value.trim()) {
          const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
          if (!emailRegex.test(value)) return "Enter a valid email address"
        }
        return undefined
      case "quantity":
        if (!value.trim()) return "Quantity is required"
        if (isNaN(Number(value)) || Number(value) <= 0) return "Enter a valid quantity"
        return undefined
      case "specifyUnit":
        if (data.unit === "OTHER" && !value.trim()) return "Please specify the unit"
        return undefined
      default:
        return undefined
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === "phoneNumber") {
      const numbersOnly = value.replace(/\D/g, "")
      if (numbersOnly.length <= 10) {
        setFormData((prev) => {
          const next = { ...prev, [name]: numbersOnly }
          return next
        })
        setErrors((prev) => ({ ...prev, phoneNumber: validateField("phoneNumber", numbersOnly) }))
      }
    } else if (name === "fullName") {
      const cleaned = value.replace(/[^a-zA-Z\s.\-]/g, "")
      setFormData((prev) => ({ ...prev, [name]: cleaned }))
      setErrors((prev) => ({ ...prev, fullName: validateField("fullName", cleaned) }))
    } else if (name === "unit") {
      setFormData((prev) => {
        const next = { ...prev, [name]: value }
        return next
      })
      setErrors((prev) => ({ ...prev, specifyUnit: validateField("specifyUnit", formData.specifyUnit, { ...formData, unit: value }) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters"
    } else if (/\d/.test(formData.fullName)) {
      newErrors.fullName = "Name should not contain numbers"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit Indian mobile number"
    }

    if (formData.emailAddress.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(formData.emailAddress)) {
        newErrors.emailAddress = "Enter a valid email address"
      }
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required"
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      newErrors.quantity = "Enter a valid quantity"
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

      const unitLabel =
        formData.unit === "BAGS" ? "Bags (50 KG)" :
        formData.unit === "MT" ? "Metric Tons (MT)" :
        formData.unit === "KG" ? "Kilograms (KG)" :
        formData.unit === "OTHER" ? formData.specifyUnit : formData.unit

      const message = [
        `*New Inquiry - Pilot Industries*`,
        ``,
        `*Name:* ${formData.fullName}`,
        `*Phone:* +91 ${formData.phoneNumber}`,
        formData.emailAddress ? `*Email:* ${formData.emailAddress}` : null,
        formData.companyName ? `*Company:* ${formData.companyName}` : null,
        formData.cityState ? `*Location:* ${formData.cityState}` : null,
        `*Product:* ${formData.product}`,
        `*Quantity:* ${formData.quantity} ${unitLabel}`,
        formData.message ? `*Message:* ${formData.message}` : null,
      ]
        .filter(Boolean)
        .join("\n")

      console.log("--- Premium Inquiry Record ---")
      console.log(message)
      console.log("------------------------------")

      const whatsappUrl = `https://wa.me/919974636384?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setIsSubmitting(false)
      setIsOpen(false)
      showToast("Thank you! Your inquiry has been sent. Our team will contact you shortly.")
      setFormData(initialFormState)
      setErrors({})
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
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="w-full max-w-xl bg-surface border border-border rounded-2xl shadow-2xl p-6 md:p-8 pointer-events-auto overflow-hidden max-h-[92vh] flex flex-col scrollbar-thin"
                >
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

                  <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-thin">
                    <div className="grid sm:grid-cols-2 gap-4">
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

                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
