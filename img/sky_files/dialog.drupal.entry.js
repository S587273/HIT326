import"./chunks/to-object-b8d98adc.js";import"./chunks/es.array.index-of-20bf1542.js";import"./chunks/_rollupPluginBabelHelpers-614f59f6.js";import"./chunks/create-property-7417731d.js";import"./chunks/es.array.sort-dada9153.js";import{A as e,D as t}from"./chunks/ajaxDialog.entry-7af1958f.js";(({behaviors:r})=>{r.cdu_dialog={attach:r=>{const o=r.querySelectorAll('[data-dialog-type="cdu_modal"]'),a="cdu_dialog_trigger",s="data-dialog-index";o&&o.forEach(((e,t)=>{const r=`trigger-${t}`;e.setAttribute(s,r),e.addEventListener("click",(()=>window.sessionStorage.setItem(a,r)))}));const l=r.querySelectorAll(".messages--dialog-appended .dialog-appended");l&&l.forEach((t=>{new e(t,{buildCloseBtn:!1,preventBodyScroll:!0,triggerAttr:s,triggerStorage:a},r).init()}));const i=r.querySelectorAll(".js-dialog-toggle");i&&i.forEach((e=>{const o=new t(e,{buildCloseBtn:!1,preventBodyScroll:!0}).init(),a=r.querySelector(".student-type__backdrop");a&&a.addEventListener("click",(e=>{o.closeOutsideClick(e)}))}))}}})(Drupal);
