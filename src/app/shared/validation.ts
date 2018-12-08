export class CustomValidator {
  static phoneValidator(number): any {
   if (number.pristine) {
      return null;
   }
   const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
   number.markAsTouched();
   if (PHONE_REGEXP.test(number.value)) {
      return null;
   }
   return {
      invalidNumber: true
   };
  }

  static zipCodeValidator(zip): any {
   if (zip.pristine) {
      return null;
   }
   const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
   zip.markAsTouched();
   if (ZIP_REGEXP.test(zip.value)) {
      return null;
   }
   return true;
}
}