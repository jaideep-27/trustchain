@@ .. @@
   return (
     <div
       className={`
-        backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 
+        backdrop-blur-sm bg-white/90 dark:bg-slate-800/90
         rounded-2xl border border-slate-200/50 dark:border-slate-600/50
-        shadow-lg hover:shadow-xl transition-all duration-300
-        ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''}
+        shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 
+        transition-all duration-500 hover:-translate-y-1
+        ${onClick ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''}
         ${className}
       `}
       onClick={onClick}
   )