(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18998,e=>{"use strict";var s=e.i(36723),i=e.i(22768),r=e.i(61321),a=e.i(55629);let t={sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12"},n={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},l=(0,i.forwardRef)(({children:e,isActive:i=!1,label:a,size:l="md",showActiveIndicator:d=!0,disabled:o=!1,className:c="",...x},m)=>(0,s.jsxs)(r.motion.button,{ref:m,whileHover:o?{}:{scale:1.05},whileTap:o?{}:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},disabled:o,"aria-label":a,"aria-pressed":i,className:`
          relative
          inline-flex items-center justify-center
          rounded-[var(--win11-radius-md)]
          transition-colors
          duration-[var(--win11-duration-fast)]
          outline-none
          ${t[l]}
          ${i?"bg-[var(--win11-bg-card-hover)] text-[var(--win11-accent)]":"bg-transparent text-[var(--win11-text-secondary)] hover:bg-[var(--win11-bg-card-hover)] hover:text-[var(--win11-text-primary)]"}
          focus-visible:ring-2
          focus-visible:ring-[var(--win11-accent)]
          focus-visible:ring-offset-2
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${c}
        `,...x,children:[(0,s.jsx)("span",{className:`${n[l]} flex items-center justify-center`,children:e}),d&&(0,s.jsx)(r.motion.span,{initial:!1,animate:{scaleX:+!!i,opacity:+!!i},transition:{type:"spring",stiffness:500,damping:30},className:" absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-[var(--win11-accent)] "})]}));function d({items:e,activeId:t,onItemClick:n,position:d="center",variant:o="floating",className:c=""}){let[x,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{m(!0)},[]);let h="floating"===o?`
        fixed bottom-4 left-1/2 -translate-x-1/2
        rounded-[var(--win11-radius-xl)]
        px-2
        shadow-[var(--win11-shadow-elevated)]
      `:`
        fixed bottom-0 left-0 right-0
        rounded-none
        px-4
      `;return(0,s.jsx)(a.AnimatePresence,{children:x&&(0,s.jsx)(r.motion.nav,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:20,opacity:0},transition:{type:"spring",stiffness:300,damping:30},role:"navigation","aria-label":"Main navigation",className:`
            ${h}
            h-[var(--win11-taskbar-height)]
            bg-[var(--win11-acrylic-light)]
            dark:bg-[var(--win11-acrylic-dark)]
            backdrop-blur-[30px]
            backdrop-saturate-[180%]
            border border-[var(--win11-border)]
            z-50
            ${c}
          `,style:{backgroundColor:"var(--win11-bg-surface)"},children:(0,s.jsx)("div",{className:`
              h-full
              flex items-center gap-1
              ${"center"===d?"justify-center":"justify-start"}
            `,children:e.map((e,i)=>(0,s.jsx)(r.motion.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05*i,type:"spring",stiffness:400,damping:25},children:(0,s.jsx)(l,{label:e.label,isActive:t===e.id,onClick:()=>{e.onClick&&e.onClick(),n&&n(e.id)},size:"md",children:e.icon})},e.id))})})})}function o({children:e,taskbarItems:i=[],activeView:r,onViewChange:a,showTaskbar:t=!0,taskbarPosition:n="center",taskbarVariant:l="floating",backgroundVariant:o="mica",className:x=""}){let m={solid:"bg-[var(--win11-bg-base)]",gradient:`
      bg-gradient-to-br
      from-[var(--win11-bg-base)]
      via-[var(--win11-bg-surface)]
      to-[var(--win11-bg-base)]
    `,mica:`
      bg-[var(--win11-bg-base)]
      relative
      overflow-hidden
    `};return(0,s.jsxs)("div",{className:`
        min-h-screen
        w-full
        ${m[o]}
        ${x}
      `,children:["mica"===o&&(0,s.jsx)(c,{}),(0,s.jsx)("main",{className:`
          relative
          z-10
          min-h-screen
          ${t?"pb-20":""}
        `,children:e}),t&&i.length>0&&(0,s.jsx)(d,{items:i,activeId:r,onItemClick:a,position:n,variant:l})]})}function c(){return(0,s.jsxs)("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none",children:[(0,s.jsx)("div",{className:" absolute inset-0 bg-gradient-to-br from-[var(--win11-accent)]/5 via-transparent to-[var(--win11-accent)]/3 "}),(0,s.jsx)("div",{className:" absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[var(--win11-accent)]/5 blur-[100px] "}),(0,s.jsx)("div",{className:" absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[var(--win11-accent)]/3 blur-[100px] "})]})}l.displayName="IconButton";let x={2:"grid-cols-2",3:"grid-cols-2 sm:grid-cols-3",4:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4",5:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",6:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"},m={sm:"gap-2",md:"gap-4",lg:"gap-6"};function h({children:e,columns:i=4,gap:r="md",className:a=""}){return(0,s.jsx)("div",{className:`
        grid
        ${x[i]}
        ${m[r]}
        ${a}
      `,children:e})}function p({children:e,title:i,subtitle:r,action:a,className:t=""}){return(0,s.jsxs)("div",{className:`
        w-full
        max-w-6xl
        mx-auto
        px-4 md:px-8
        py-8
        ${t}
      `,children:[(i||a)&&(0,s.jsxs)("div",{className:"flex items-end justify-between mb-8",children:[(0,s.jsxs)("div",{children:[i&&(0,s.jsx)("h1",{className:"text-2xl font-semibold text-[var(--win11-text-primary)]",children:i}),r&&(0,s.jsx)("p",{className:"mt-1 text-[var(--win11-text-secondary)]",children:r})]}),a&&(0,s.jsx)("div",{children:a})]}),e]})}var v=e.i(29081);let g={none:"",sm:"p-3",md:"p-4",lg:"p-6"},w=(0,i.forwardRef)(({children:e,variant:i="default",padding:a="md",hover:t=!1,className:n="",...l},d)=>{let o=`
      rounded-[var(--win11-radius-lg)]
      overflow-hidden
    `,c={default:`
        bg-[var(--win11-bg-card)]
        border border-[var(--win11-border)]
        shadow-[var(--win11-shadow-sm)]
      `,interactive:`
        bg-[var(--win11-bg-card)]
        border border-[var(--win11-border)]
        shadow-[var(--win11-shadow-sm)]
        cursor-pointer
      `,outlined:`
        bg-transparent
        border border-[var(--win11-border-strong)]
      `};return(0,s.jsx)(r.motion.div,{ref:d,...t||"interactive"===i?{whileHover:{y:-2,boxShadow:"0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)"},transition:{type:"spring",stiffness:400,damping:25}}:{},className:`
          ${o}
          ${c[i]}
          ${g[a]}
          ${n}
        `,...l,children:e})});w.displayName="Card";let u=(0,i.forwardRef)(({title:e,subtitle:i,icon:a,action:t,children:n,onClick:l,className:d="",...o},c)=>(0,s.jsxs)(r.motion.div,{ref:c,whileHover:{y:-2,boxShadow:"0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)"},whileTap:l?{scale:.99}:{},transition:{type:"spring",stiffness:400,damping:25},onClick:l,className:`
          bg-[var(--win11-bg-card)]
          border border-[var(--win11-border)]
          rounded-[var(--win11-radius-lg)]
          shadow-[var(--win11-shadow-sm)]
          overflow-hidden
          ${l?"cursor-pointer":""}
          ${d}
        `,...o,children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-4 pb-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[a&&(0,s.jsx)("div",{className:" w-8 h-8 flex items-center justify-center rounded-[var(--win11-radius-md)] bg-[var(--win11-accent)] text-white ",children:a}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-sm font-medium text-[var(--win11-text-primary)]",children:e}),i&&(0,s.jsx)("p",{className:"text-xs text-[var(--win11-text-secondary)]",children:i})]})]}),t&&(0,s.jsx)("div",{children:t})]}),(0,s.jsx)("div",{className:"px-4 pb-4",children:n})]}));u.displayName="WidgetCard";let b={sm:"w-20 h-20",md:"w-28 h-28",lg:"w-36 h-36"},j=(0,i.forwardRef)(({title:e,icon:i,onClick:a,size:t="md",accentColor:n,className:l="",...d},o)=>(0,s.jsxs)(r.motion.div,{ref:o,whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},onClick:a,className:`
          ${b[t]}
          flex flex-col items-center justify-center gap-2
          bg-[var(--win11-bg-card)]
          border border-[var(--win11-border)]
          rounded-[var(--win11-radius-lg)]
          shadow-[var(--win11-shadow-sm)]
          cursor-pointer
          transition-colors duration-100
          hover:bg-[var(--win11-bg-card-hover)]
          ${l}
        `,style:n?{backgroundColor:n}:{},...d,children:[(0,s.jsx)("div",{className:"w-8 h-8 text-[var(--win11-text-primary)]",children:i}),(0,s.jsx)("span",{className:"text-xs font-medium text-[var(--win11-text-primary)] text-center px-2 truncate w-full",children:e})]}));j.displayName="TileCard";var f=e.i(74911);let y={primary:`
    bg-[var(--win11-accent)] text-white
    hover:bg-[var(--win11-accent-hover)]
    active:bg-[var(--win11-accent-dark)]
    shadow-[var(--win11-shadow-sm)]
    hover:shadow-[var(--win11-shadow-md)]
  `,secondary:`
    bg-[var(--win11-bg-surface)]
    border border-[var(--win11-border)]
    text-[var(--win11-text-primary)]
    hover:bg-[var(--win11-bg-card-hover)]
    hover:border-[var(--win11-border-strong)]
    shadow-[var(--win11-shadow-sm)]
  `,ghost:`
    bg-transparent
    text-[var(--win11-text-primary)]
    hover:bg-[var(--win11-bg-card-hover)]
  `},N={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-2.5 text-base"},k=(0,i.forwardRef)(({variant:e="primary",size:i="md",fullWidth:a=!1,disabled:t=!1,children:n,className:l="",...d},o)=>(0,s.jsx)(r.motion.button,{ref:o,whileHover:t?{}:{scale:1.02},whileTap:t?{}:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},disabled:t,className:`
          inline-flex items-center justify-center gap-2
          rounded-[var(--win11-radius-md)]
          font-medium
          transition-colors
          duration-[var(--win11-duration-fast)]
          outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--win11-accent)]
          focus-visible:ring-offset-2
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:pointer-events-none
          ${y[e]}
          ${N[i]}
          ${a?"w-full":""}
          ${l}
        `,...d,children:n}));k.displayName="Button";let C={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"};function T({isOpen:e,onClose:t,title:n,description:l,children:d,footer:o,size:c="md",showCloseButton:x=!0,closeOnBackdropClick:m=!0,closeOnEscape:h=!0}){let p=(0,i.useRef)(null),v=(0,i.useRef)(null),g=(0,i.useCallback)(e=>{"Escape"===e.key&&h&&t()},[h,t]);return(0,i.useEffect)(()=>(e&&(v.current=document.activeElement,setTimeout(()=>{p.current?.focus()},0),document.addEventListener("keydown",g),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",g),document.body.style.overflow="",v.current&&v.current.focus()}),[e,g]),(0,f.createPortal)((0,s.jsx)(a.AnimatePresence,{children:e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:e=>{e.target===e.currentTarget&&m&&t()},className:" fixed inset-0 z-50 bg-black/40 backdrop-blur-[4px] flex items-center justify-center p-4 ","aria-hidden":"true",children:(0,s.jsxs)(r.motion.div,{ref:p,initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:10},transition:{type:"spring",stiffness:300,damping:25},role:"dialog","aria-modal":"true","aria-labelledby":n?"modal-title":void 0,"aria-describedby":l?"modal-description":void 0,tabIndex:-1,onClick:e=>e.stopPropagation(),className:`
                ${C[c]}
                w-full
                bg-[var(--win11-bg-surface)]
                border border-[var(--win11-border)]
                rounded-[var(--win11-radius-lg)]
                shadow-[var(--win11-shadow-xl)]
                overflow-hidden
                outline-none
              `,children:[(n||x)&&(0,s.jsxs)("div",{className:"flex items-start justify-between p-6 pb-0",children:[(0,s.jsxs)("div",{className:"flex-1 pr-4",children:[n&&(0,s.jsx)("h2",{id:"modal-title",className:"text-lg font-semibold text-[var(--win11-text-primary)]",children:n}),l&&(0,s.jsx)("p",{id:"modal-description",className:"mt-1 text-sm text-[var(--win11-text-secondary)]",children:l})]}),x&&(0,s.jsx)(r.motion.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,"aria-label":"Close dialog",className:" w-8 h-8 flex items-center justify-center rounded-[var(--win11-radius-sm)] text-[var(--win11-text-secondary)] hover:bg-[var(--win11-bg-card-hover)] hover:text-[var(--win11-text-primary)] transition-colors duration-100 ",children:(0,s.jsx)(L,{})})]}),d&&(0,s.jsx)("div",{className:"p-6 text-[var(--win11-text-primary)]",children:d}),o&&(0,s.jsx)("div",{className:" flex items-center justify-end gap-2 px-6 py-4 bg-[var(--win11-bg-surface-secondary)] border-t border-[var(--win11-border)] ",children:o})]})})})}),document.body)}function L(){return(0,s.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1 1L11 11M11 1L1 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function $({isOpen:e,onClose:i,onConfirm:r,title:a,message:t,confirmLabel:n="Confirm",cancelLabel:l="Cancel",variant:d="default"}){return(0,s.jsx)(T,{isOpen:e,onClose:i,title:a,size:"sm",footer:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{variant:"secondary",onClick:i,children:l}),(0,s.jsx)(k,{variant:"primary",onClick:()=>{r(),i()},className:"danger"===d?"bg-red-500 hover:bg-red-600":"",children:n})]}),children:(0,s.jsx)("p",{className:"text-sm",children:t})})}let A=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,s.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),S=()=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),W=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,s.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),B=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),z=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,s.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),H=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,s.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,s.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,s.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),M=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("polyline",{points:"16 18 22 12 16 6"}),(0,s.jsx)("polyline",{points:"8 6 2 12 8 18"})]}),R=()=>(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,s.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,s.jsx)("polyline",{points:"21 15 16 10 5 21"})]}),D=[{id:"home",label:"Home",icon:(0,s.jsx)(A,{})},{id:"files",label:"Files",icon:(0,s.jsx)(S,{})},{id:"mail",label:"Mail",icon:(0,s.jsx)(z,{})},{id:"calendar",label:"Calendar",icon:(0,s.jsx)(H,{})},{id:"settings",label:"Settings",icon:(0,s.jsx)(W,{})}];function O(){let[e,r]=(0,i.useState)("home"),[a,t]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!0);return(0,s.jsx)(o,{taskbarItems:D,activeView:e,onViewChange:r,backgroundVariant:"mica",taskbarVariant:"floating",children:(0,s.jsxs)(p,{title:"Windows 11 UI Components",subtitle:"A collection of React components inspired by the Windows 11 design language",children:[(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Buttons"}),(0,s.jsxs)(w,{padding:"lg",children:[(0,s.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,s.jsx)(k,{variant:"primary",children:"Primary Button"}),(0,s.jsx)(k,{variant:"secondary",children:"Secondary Button"}),(0,s.jsx)(k,{variant:"ghost",children:"Ghost Button"}),(0,s.jsx)(k,{variant:"primary",disabled:!0,children:"Disabled"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-4 mt-4",children:[(0,s.jsx)(k,{variant:"primary",size:"sm",children:"Small"}),(0,s.jsx)(k,{variant:"primary",size:"md",children:"Medium"}),(0,s.jsx)(k,{variant:"primary",size:"lg",children:"Large"})]})]})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Cards"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[(0,s.jsxs)(w,{variant:"default",padding:"lg",children:[(0,s.jsx)("h3",{className:"font-medium text-[var(--win11-text-primary)] mb-2",children:"Default Card"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"A standard card with subtle border and shadow. Good for grouping related content."})]}),(0,s.jsxs)(w,{variant:"interactive",padding:"lg",children:[(0,s.jsx)("h3",{className:"font-medium text-[var(--win11-text-primary)] mb-2",children:"Interactive Card"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"Hover to see the lift effect. Click to interact."})]}),(0,s.jsxs)(w,{variant:"outlined",padding:"lg",children:[(0,s.jsx)("h3",{className:"font-medium text-[var(--win11-text-primary)] mb-2",children:"Outlined Card"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"A minimal card with just a border, no background fill."})]})]})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Widget Cards"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,s.jsxs)(u,{title:"Weather",subtitle:"San Francisco, CA",icon:(0,s.jsx)("span",{className:"text-lg",children:"72°"}),children:[(0,s.jsx)("div",{className:"text-3xl font-light text-[var(--win11-text-primary)]",children:"Sunny"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)] mt-2",children:"High: 78° / Low: 62°"})]}),(0,s.jsx)(u,{title:"Tasks",subtitle:"3 items due today",icon:(0,s.jsx)("span",{className:"text-sm font-bold",children:"3"}),action:(0,s.jsx)(k,{variant:"ghost",size:"sm",children:"View All"}),children:(0,s.jsxs)("ul",{className:"space-y-2",children:[(0,s.jsxs)("li",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)("span",{className:"w-4 h-4 rounded border border-[var(--win11-border)]"}),(0,s.jsx)("span",{className:"text-[var(--win11-text-primary)]",children:"Review pull requests"})]}),(0,s.jsxs)("li",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)("span",{className:"w-4 h-4 rounded border border-[var(--win11-border)]"}),(0,s.jsx)("span",{className:"text-[var(--win11-text-primary)]",children:"Update documentation"})]}),(0,s.jsxs)("li",{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)("span",{className:"w-4 h-4 rounded border border-[var(--win11-border)]"}),(0,s.jsx)("span",{className:"text-[var(--win11-text-primary)]",children:"Deploy to production"})]})]})})]})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Tile Grid"}),(0,s.jsxs)(h,{columns:6,gap:"md",children:[(0,s.jsx)(j,{title:"Home",icon:(0,s.jsx)(A,{}),onClick:()=>{}}),(0,s.jsx)(j,{title:"Files",icon:(0,s.jsx)(S,{}),onClick:()=>{}}),(0,s.jsx)(j,{title:"Mail",icon:(0,s.jsx)(z,{}),onClick:()=>{}}),(0,s.jsx)(j,{title:"Calendar",icon:(0,s.jsx)(H,{}),onClick:()=>{}}),(0,s.jsx)(j,{title:"Code",icon:(0,s.jsx)(M,{}),onClick:()=>{}}),(0,s.jsx)(j,{title:"Photos",icon:(0,s.jsx)(R,{}),onClick:()=>{}})]})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"App Window"}),(0,s.jsx)("div",{className:"flex items-center gap-4 mb-4",children:(0,s.jsx)(k,{variant:"secondary",onClick:()=>c(!d),children:d?"Close Window":"Open Window"})}),(0,s.jsx)(v.AppWindow,{title:"Settings",subtitle:"System preferences",icon:(0,s.jsx)(W,{}),isOpen:d,showCloseButton:!0,onClose:()=>c(!1),size:"lg",children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-3 rounded-lg bg-[var(--win11-bg-surface-secondary)]",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-10 h-10 rounded-full bg-[var(--win11-accent)] flex items-center justify-center text-white",children:(0,s.jsx)(B,{})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-medium text-[var(--win11-text-primary)]",children:"John Doe"}),(0,s.jsx)("div",{className:"text-sm text-[var(--win11-text-secondary)]",children:"john.doe@email.com"})]})]}),(0,s.jsx)(k,{variant:"secondary",size:"sm",children:"Manage"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)(w,{padding:"md",hover:!0,children:[(0,s.jsx)("h4",{className:"font-medium text-[var(--win11-text-primary)]",children:"System"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"Display, sound, notifications"})]}),(0,s.jsxs)(w,{padding:"md",hover:!0,children:[(0,s.jsx)("h4",{className:"font-medium text-[var(--win11-text-primary)]",children:"Personalization"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"Background, colors, themes"})]})]})]})})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Modals & Dialogs"}),(0,s.jsx)(w,{padding:"lg",children:(0,s.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,s.jsx)(k,{variant:"primary",onClick:()=>t(!0),children:"Open Modal"}),(0,s.jsx)(k,{variant:"secondary",onClick:()=>l(!0),children:"Open Confirm Dialog"})]})}),(0,s.jsxs)(T,{isOpen:a,onClose:()=>t(!1),title:"Modal Dialog",description:"This is a Windows 11-style modal dialog.",footer:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{variant:"secondary",onClick:()=>t(!1),children:"Cancel"}),(0,s.jsx)(k,{variant:"primary",onClick:()=>t(!1),children:"Save Changes"})]}),children:[(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"This modal demonstrates the Windows 11 dialog styling with smooth animations, backdrop blur, and proper focus management. Press Escape to close or click outside the dialog."}),(0,s.jsx)("div",{className:"mt-4 p-4 rounded-lg bg-[var(--win11-bg-surface-secondary)]",children:(0,s.jsx)("p",{className:"text-sm",children:"You can put any content here, including forms, lists, or other components."})})]}),(0,s.jsx)($,{isOpen:n,onClose:()=>l(!1),onConfirm:()=>console.log("Confirmed!"),title:"Confirm Action",message:"Are you sure you want to perform this action? This cannot be undone.",confirmLabel:"Yes, Continue",cancelLabel:"Cancel"})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Glassmorphism / Acrylic Effect"}),(0,s.jsx)("div",{className:" relative h-64 rounded-[var(--win11-radius-lg)] overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ",children:(0,s.jsxs)("div",{className:" absolute inset-4 rounded-[var(--win11-radius-lg)] bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex flex-col justify-center ",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-white mb-2",children:"Acrylic Material"}),(0,s.jsx)("p",{className:"text-white/80",children:"This panel demonstrates the glassmorphism effect used in Windows 11. The background shows through with blur and saturation effects."})]})})]}),(0,s.jsxs)("section",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Typography & Colors"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,s.jsxs)(w,{padding:"lg",children:[(0,s.jsx)("h3",{className:"font-medium text-[var(--win11-text-primary)] mb-4",children:"Text Styles"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("p",{className:"text-2xl text-[var(--win11-text-primary)]",children:"Display Text (24px)"}),(0,s.jsx)("p",{className:"text-lg text-[var(--win11-text-primary)]",children:"Title Text (18px)"}),(0,s.jsx)("p",{className:"text-base text-[var(--win11-text-primary)]",children:"Body Text (16px)"}),(0,s.jsx)("p",{className:"text-sm text-[var(--win11-text-secondary)]",children:"Secondary Text (14px)"}),(0,s.jsx)("p",{className:"text-xs text-[var(--win11-text-disabled)]",children:"Disabled Text (12px)"})]})]}),(0,s.jsxs)(w,{padding:"lg",children:[(0,s.jsx)("h3",{className:"font-medium text-[var(--win11-text-primary)] mb-4",children:"Accent Colors"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-8 h-8 rounded-lg bg-[var(--win11-accent)]"}),(0,s.jsx)("span",{className:"text-sm text-[var(--win11-text-primary)]",children:"Accent (#0078d4)"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-8 h-8 rounded-lg bg-[var(--win11-accent-light)]"}),(0,s.jsx)("span",{className:"text-sm text-[var(--win11-text-primary)]",children:"Accent Light (#60cdff)"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-8 h-8 rounded-lg bg-[var(--win11-accent-dark)]"}),(0,s.jsx)("span",{className:"text-sm text-[var(--win11-text-primary)]",children:"Accent Dark (#005a9e)"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-8 h-8 rounded-lg bg-[var(--win11-bg-surface)] border border-[var(--win11-border)]"}),(0,s.jsx)("span",{className:"text-sm text-[var(--win11-text-primary)]",children:"Surface"})]})]})]})]})]}),(0,s.jsxs)("section",{className:"mb-24",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-[var(--win11-text-primary)] mb-4",children:"Usage Notes"}),(0,s.jsx)(w,{padding:"lg",children:(0,s.jsxs)("div",{className:"prose prose-sm max-w-none text-[var(--win11-text-secondary)]",children:[(0,s.jsx)("p",{className:"mb-4",children:"This component library is inspired by Windows 11 design language but adapted for web use. Key features include:"}),(0,s.jsxs)("ul",{className:"list-disc pl-5 space-y-2",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{className:"text-[var(--win11-text-primary)]",children:"Glassmorphism:"})," ","Use backdrop-filter for blur effects on cards and panels"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{className:"text-[var(--win11-text-primary)]",children:"Rounded Corners:"})," ","8-12px border radius for most elements"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{className:"text-[var(--win11-text-primary)]",children:"Subtle Shadows:"})," ","Layered shadows for depth without being heavy"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{className:"text-[var(--win11-text-primary)]",children:"Natural Animations:"})," ","Spring-based animations with gentle easing"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{className:"text-[var(--win11-text-primary)]",children:"Responsive:"})," ","Desktop-first but adapts to all screen sizes"]})]})]})})]})]})})}e.s(["default",()=>O],18998)}]);