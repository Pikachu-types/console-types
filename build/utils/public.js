"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthBucket = getMonthBucket;
function getMonthBucket() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
//# sourceMappingURL=public.js.map