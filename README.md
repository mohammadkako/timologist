# Timologist

Do you have a collection of videos or music with varying durations and want to know the total playback time? Manually calculating this can be time-consuming and prone to error. Timologist can help!

**Total Collection Time:** To calculate the total time of your collection, open the `timeline.js` file and populate the `moviesTime` array. This array should contain two-dimensional arrays representing the duration of each item in minutes and seconds, like this: `[[minutes, seconds], [minutes, seconds], [minutes, seconds], ...]`. The total playback time will then be displayed in the console.

Here are some additional features:

**Watched and Remaining Time:** If you specify the sections you've already watched in the `watchedSections` variable, Timologist will calculate and display both the total watched time and the remaining time in the console.

==================================================

آیا مجموعه‌ای از ویدیوها یا موسیقی‌ها با مدت زمان‌های مختلف دارید و می‌خواید کل زمان پخش اون‌ها را بدونید؟ محاسبه دستی این کار می‌تونه زمان‌بر و همراه با خطا باشه. Timologist می‌تونه به شما کمک کنه!

کل زمان مجموعه: برای محاسبه کل زمان مجموعه خود، فایل timeline.js را باز کنید و آرایه moviesTime را پر کنید. این آرایه باید شامل آرایه‌های دو بعدی باشه که نشان دهنده مدت زمان هر آیتم به دقیقه و ثانیه است، به این صورت: [[دقیقه، ثانیه], [دقیقه، ثانیه], [دقیقه، ثانیه], ...]. سپس کل زمان پخش در console نمایش داده می‌شه.

در اینجا چند ویژگی اضافی وجود دارد:

زمان تماشا شده و باقی مانده: اگر قسمت‌هایی را که قبلاً تماشا کردید رو در متغیر watchedSections مشخص کنید، Timologist هم کل زمان تماشا شده و هم زمان باقی مانده مجموعه را در console محاسبه و نمایش می‌دهد.
