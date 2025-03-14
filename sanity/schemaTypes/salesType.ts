import { TagIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const salesType = defineField({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Sale Description",
      type: "text",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description: "Amount off in precentage or fixed value",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Valid From",
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "Valid Until",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Toggle to active/deactivate the sale",
      initialValue: true,
    }),
  ],
});
