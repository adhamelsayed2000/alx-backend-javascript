export function handlePromiseError(error) {
    console.error('Error occurred:', error.message);
    process.exit(1); // تخرج من عملية Node.js برمز خطأ غير صفري
  }
  