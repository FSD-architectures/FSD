import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import type { LocalizedNameInput } from "@/shared/types/localized-name";

interface LocalizedNameFieldsProps {
  values: LocalizedNameInput;
  onChange: (field: keyof LocalizedNameInput, value: string) => void;
  errors?: Partial<Record<keyof LocalizedNameInput, string>>;
}

export function LocalizedNameFields({
  values,
  onChange,
  errors,
}: LocalizedNameFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="space-y-2">
        <Label htmlFor="nameAr">Name (Arabic)</Label>
        <Input
          id="nameAr"
          value={values.nameAr}
          onChange={(e) => onChange("nameAr", e.target.value)}
          placeholder="الاسم بالعربية"
          dir="rtl"
          aria-invalid={!!errors?.nameAr}
        />
        {errors?.nameAr && (
          <p className="text-sm text-destructive">{errors.nameAr}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="nameEn">Name (English)</Label>
        <Input
          id="nameEn"
          value={values.nameEn}
          onChange={(e) => onChange("nameEn", e.target.value)}
          placeholder="Name in English"
          aria-invalid={!!errors?.nameEn}
        />
        {errors?.nameEn && (
          <p className="text-sm text-destructive">{errors.nameEn}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="nameIt">Name (Italian)</Label>
        <Input
          id="nameIt"
          value={values.nameIt}
          onChange={(e) => onChange("nameIt", e.target.value)}
          placeholder="Nome in italiano"
          aria-invalid={!!errors?.nameIt}
        />
        {errors?.nameIt && (
          <p className="text-sm text-destructive">{errors.nameIt}</p>
        )}
      </div>
    </div>
  );
}
