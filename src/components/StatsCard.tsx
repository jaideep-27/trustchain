@@ .. @@
   return (
   )
-    <GlassCard className="p-6 hover:scale-105 transition-transform duration-200">
+    <GlassCard className="p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
       <div className="flex items-center justify-between mb-4">
-        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-full shadow-lg`}>
+        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
           <Icon className="w-6 h-6 text-white" />
         </div>
       </div>
       
-      <div className="font-poppins font-bold text-3xl mb-2 text-slate-800 dark:text-white">
+      <div className="font-bold text-3xl mb-2 text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
         {value}
       </div>
       
-      <div className="font-dm-sans text-sm text-slate-600 dark:text-slate-400 leading-tight font-medium">
+      <div className="text-sm text-slate-600 dark:text-slate-400 leading-tight font-medium">
         {label}
       </div>
     </GlassCard>