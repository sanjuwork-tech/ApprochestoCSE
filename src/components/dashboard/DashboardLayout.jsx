import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import DashboardContent from './DashboardContent'

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [toast, setToast] = useState(null)

  // Handle toast notifications
  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/20 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <DashboardContent onShowToast={showToast} />
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: -50 }}
            className="fixed bottom-6 left-6 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <span className="text-lg">⚡</span>
            <span className="text-sm font-medium">{toast}</span>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
