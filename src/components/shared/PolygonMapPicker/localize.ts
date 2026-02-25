import L from "leaflet";
let ORIGINAL_DRAW_LOCAL: any | null = null;
// Call this before creating L.Control.Draw
export const setLeafletDrawArabic = () => {
  const LA = L as unknown as {
    drawLocal: any;
    __draw_ar_set?: boolean;
  };

  if (!ORIGINAL_DRAW_LOCAL) {
    ORIGINAL_DRAW_LOCAL = structuredClone(LA.drawLocal);
  }

  if (LA.__draw_ar_set) return;
  LA.__draw_ar_set = true;

  // keep defaults, override only what you need
  LA.drawLocal = {
    ...(LA.drawLocal ?? {}),
    draw: {
      ...(LA.drawLocal?.draw ?? {}),
      toolbar: {
        ...(LA.drawLocal?.draw?.toolbar ?? {}),
        actions: {
          ...(LA.drawLocal?.draw?.toolbar?.actions ?? {}),
          title: "إلغاء الرسم",
          text: "إلغاء",
        },
        finish: {
          ...(LA.drawLocal?.draw?.toolbar?.finish ?? {}),
          title: "إنهاء الرسم",
          text: "إنهاء",
        },
        undo: {
          ...(LA.drawLocal?.draw?.toolbar?.undo ?? {}),
          title: "حذف آخر نقطة",
          text: "تراجع",
        },
        buttons: {
          ...(LA.drawLocal?.draw?.toolbar?.buttons ?? {}),
          polygon: "ارسم مضلعًا",
        },
      },
      handlers: {
        ...(LA.drawLocal?.draw?.handlers ?? {}),
        polygon: {
          ...(LA.drawLocal?.draw?.handlers?.polygon ?? {}),
          tooltip: {
            ...(LA.drawLocal?.draw?.handlers?.polygon?.tooltip ?? {}),
            start: "اضغط لبدء رسم المضلع",
            cont: "اضغط لإضافة نقطة",
            end: "اضغط على النقطة الأولى لإغلاق المضلع",
          },
        },
      },
    },
    edit: {
      ...(LA.drawLocal?.edit ?? {}),
      toolbar: {
        ...(LA.drawLocal?.edit?.toolbar ?? {}),
        actions: {
          ...(LA.drawLocal?.edit?.toolbar?.actions ?? {}),
          save: { title: "حفظ التعديلات", text: "حفظ" },
          cancel: { title: "إلغاء التعديلات", text: "إلغاء" },
          clearAll: { title: "حذف جميع الأشكال", text: "حذف الكل" },
        },
        buttons: {
          ...(LA.drawLocal?.edit?.toolbar?.buttons ?? {}),
          edit: "تعديل الأشكال",
          editDisabled: "لا توجد أشكال للتعديل",
          remove: "حذف الأشكال",
          removeDisabled: "لا توجد أشكال للحذف",
        },
      },
      handlers: {
        ...(LA.drawLocal?.edit?.handlers ?? {}),
        edit: {
          ...(LA.drawLocal?.edit?.handlers?.edit ?? {}),
          tooltip: {
            ...(LA.drawLocal?.edit?.handlers?.edit?.tooltip ?? {}),
            text: "اسحب النقاط لتعديل الشكل",
            subtext: "اضغط إلغاء للتراجع عن التعديلات",
          },
        },
        remove: {
          ...(LA.drawLocal?.edit?.handlers?.remove ?? {}),
          tooltip: {
            ...(LA.drawLocal?.edit?.handlers?.remove?.tooltip ?? {}),
            text: "اضغط على الشكل لحذفه",
          },
        },
      },
    },
  };
};

export const restoreLeafletDrawEnglish = () => {
  const LA = L as any;
  if (ORIGINAL_DRAW_LOCAL) {
    LA.drawLocal = structuredClone(ORIGINAL_DRAW_LOCAL);
  }
};
