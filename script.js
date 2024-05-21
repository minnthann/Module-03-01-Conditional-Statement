// Expression1 နှင့် Expression2 ကို သတ်မှတ်ပါ
const expression1 = true;  // အချိန်လျှောက်ပြင်ဆင်ရန်
const expression2 = true;  // အချိန်လျှောက်ပြင်ဆင်ရန်

// အခြေအနေအလိုက် console message ကို ဖော်ပြမည်။
if (expression1 && expression2) {
    console.log("True ✅ True ✅");
} else if (expression1 && !expression2) {
    console.log("True ✅ False ❌");
} else if (!expression1 && expression2) {
    console.log("False ❌ True ✅");
} else {
    console.log("False ❌ False ❌");
}
// Ture Ture

// expression1 နှင့် expression2 ကို နံပါတ်များဖြင့် သတ်မှတ်ပါ
const expression1 = 5 > 3;  // True
const expression2 = 2 < 1;  // False

// အခြေအနေအလိုက် console message ကို ဖော်ပြမည်။
if (expression1 && expression2) {
    console.log("True ✅ True ✅");
} else if (expression1 && !expression2) {
    console.log("True ✅ False ❌");
} else if (!expression1 && expression2) {
    console.log("False ❌ True ✅");
} else {
    console.log("False ❌ False ❌");
}
