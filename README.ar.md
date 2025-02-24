# أستروبيبر مع دعم الترجمة

🌍 [Readme in English](README.md)

<div align='center'>

![AstroPaper I18n](/public/astro-paper-i18n.png)

</div>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/yousef8/AstroPaperI18n/deploy.yml?branch=main) ![GitHub Release](https://img.shields.io/github/v/release/yousef8/AstroPaperI18n)

<div dir="rtl">

هذا المستودع متفرع من ثيمة [AstroPaper](https://github.com/satnaing/astro-paper) مع إضافة دعم للترجمة

تمت أضافة دعم الترجمة بواسطة [توجيه المسارات المترجمة](https://docs.astro.build/en/guides/internationalization/) المقدمة بشكل إفتراضى من [استرو](https://astro.build/)

بما أن لغتى الأم هي العربية فإن هذه الثيمة تدعم اللغات التى تكتب من اليمين لليسار , و هذا كان في عين الأعتبار منذ البداية

بإذن الله سيكون دائما هناك متزامن مع المستودع الأصلى ليقدم اخر التحديثات

سيتم المحافظة على الواجهة كما هى فى الثيمة الأصلية و لن يتم تقديم أى تعديل  على الواجهة ألا بقدر ما تستدعيه الحاجة

## جدول المحتويات

- [🔥 المميزات](#-المميزات)
  - [تحسينات واجهة المستخدم](#تحسينات-واجهة-المستخدم)
  - [دعم الترجمة بواسطة i18n](#دعم-الترجمة-بواسطة-i18n)
  - [🧪 الاختبارات (📋 مُخطط له)](#-الاختبارات--مُخطط-له)
- [نتيجة تقييم لايت هاوس](#نتيجة-تقييم-لايت-هاوس)
- [📖 طريقة الأستخدام](#-طريقة-الأستخدام)
  - [🔧 إعدادت الموقع](#-إعدادت-الموقع)
  - [🌐 إعدادات الترجمة](#-إعدادات-الترجمة)
    - [**مفتاح الترجمة**  (مثال `ar`, `en` )](#مفتاح-الترجمة--مثال-ar-en-)
    - [**معلومات الترجمة** ( القيمة المعينة لمفتاح الترجمة)](#معلومات-الترجمة--القيمة-المعينة-لمفتاح-الترجمة)
    - [**عمل ترجمتك الخاصة**](#عمل-ترجمتك-الخاصة)
  - [📂 هيكلة ملف الصفح (pages)](#-هيكلة-ملف-الصفح-pages)
    - [📄 الملفات المشتركة](#-الملفات-المشتركة)
- [🚧 المشاكل المعروفة](#-المشاكل-المعروفة)

## 🔥 المميزات

يحتوي هذا المشروع على كل ميزات [AstroPaper](https://github.com/satnaing/astro-paper) الأصلية، بالإضافة إلى:

### تحسينات واجهة المستخدم

- [x]  **الواجهة جاهلة بالإتجاهات**
  - دعم كامل للغات المكتوبة من اليمين لليسار
  - واجهة المستخدم متسقة مهما كان إتجاه الكتابة من اليمين لليسار أو العكس

### دعم الترجمة بواسطة i18n

- [x] ترجمة واجهة المستخدم بالأرقام والتواريخ.
- [x] قائمة منسدلة لتغيير لغة الموقع.
- [x] ترجمات متعلقة بالوصول لمن يعانون من إعاقات بصرية أو سمعية.
- [x] دعم i18n باستخدام TypeScript.
- [x]  [خرائط موقع](https://docs.astro.build/en/guides/integrations-guide/sitemap/) مع دعم لل i18n
- [x] توليد صور[OG](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/) مترجمة
  - ملحوظة : [satori](https://www.npmjs.com/package/satori) لا تدعم اللغات ذات إتجاه من يمين لليسار. لذلك ستكون الصور بها بعض المشاكل فى هذه الحالة
- [x] [تلخيص الموقع](https://docs.astro.build/en/guides/rss/) مع دعم للترجمة
- [ ] 📋 **مخطط له**
  - [ ] ترجمة مسارات الموقع

### 🧪 الاختبارات

- [x] إختبار الوحدات بواسطة [ڤيتست](https://vitest.dev/)
- [x] إختبار وحدات الإعدادت و الدوال المساعدة الخاصة بالترجمة
- [ ] إختبار الوحدات فى ملف [src/utils](/src/utils)
- [ ] إختبار الوحدات فى ملف [src/config.ts](/src/config.ts)

## نتيجة تقييم لايت هاوس

اضغط لروئية التقرير كاملا

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-yousef8-github-io-AstroPaperI18n-ar/d2cqwqovpv?form_factor=desktop">
    <img width="710" alt="AstroPaper I18n Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  <a>
</p>

## 📖 طريقة الأستخدام

هى نفس طريقة [إستخدام و إعداد الثيمة الأصلية](https://github.com/satnaing/astro-paper?tab=readme-ov-file#-project-structure) و لكن مع بعض التعديلات اللازمة لترجمة الموقع

### 🔧 إعدادت الموقع

الإعداد `SITE.title` تم إستبداله بترجمة `site.title`, و المستخدمة حاليا فى الموقع كله

الإعداد `SITE.desc` تم إستبداله بترجمة `site.desc`, و المستخدمة حاليا فى الموقع كله

```diff
// src/config.ts

export const SITE: Site = {
  //...
-  title: "AstroPaper I18n",
-  desc: "A fork of AstroPaper theme with support for I18n",
  //...
};
```

```diff
// src/i18n/types.ts

export interface I18nStrings {
+  "site.title": string;
+  "site.desc": string;
   // ... other translations
```

### 🌐 إعدادات الترجمة

تم نقل إعدادات التوطين (localization) من `src/config.ts` إلى ملف منفصل

```diff
// src/config.ts

-export const LOCALE = {
-  lang: "en", // html lang code. Set this empty and default will be "en"
-  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
-} as const;

export const LOGO_IMAGE = {
```

الان إعدادات الترجمة (التوطين) إلى `src/i18n/config.ts`:

```ts
// src/i18n/config.ts
export const localeToProfile = {
 // مفتاح الترجمة يجب أن يكتب بأحرف إنجليزية صغيرة و موافق للرموز القياسية BCP-47
  ar: {
   // الإسم المعروض فى قائمة الترجمات المنسدلة
    name: "العربية",
   // ترجمات كلمات النضام
    messages: ARLocale, 
   // رمز اللغة المستجدم فى ترجمة التواريخ و الارقام و خرائط المواقع ,يجب أن يكون موافق لرموز القياسية
  // BCP47 المعروفة ب 
    langTag: "ar-EG",
    googleFontName: "Cairo", // لتوليد صور الشار للمنشورات, يجب أن يكون خط من جوجلداعم لوزن ال400 و 700 . استبدل المسافات ب '+'
    direction: "rtl", // إتجاه الكتابة فى الموقع
  },
  en: {
    name: "English",
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
    default: true,
  },
} satisfies Record<string, LocaleProfile>;
```

بعض النقاط المهمة حول إعدادات ترجمة الموقع

#### **مفتاح الترجمة**  (مثال `ar`, `en` )

- **يجب إن يكون الاسم موافق للرموز القياسية BCP47**
- **يجب أن يكون الأسم بأحرف إنجليزية صغيرة**
- قائمة من مفاتيح الترجمات يتم إعدادها و تمريرها إلي [إعدادات ترجمة استرو](https://docs.astro.build/en/guides/internationalization/#configure-i18n-routing)
- كل مفتاح ترجمة يكون نطاق من المسارات (URLs) للصفح المترجمة بهذا المفتاح
  - مثال لو أن المفتاح `ar` فكل المسارات لصفح الموقع العربية تبدأ ب `ar/`
- الترجمة الأفتراضية لن يتم إضافة مفتاحها إلى مسارات الصفح و لكن سيتم خدمتها من المسار الرئيسى `/`

#### **معلومات الترجمة** ( القيمة المعينة لمفتاح الترجمة)

- **الأسم** (name) : ما يعرض فى قائمة الترجمات المنسدلة
- **الرسائل** (messages) : ترجمات كلمات النظام [انظر أسفل لتعرف كيف تنشأ الترجمة الخاصة بلغتك](#عمل-ترجمتك-الخاصة)
- **رمز اللغة** (langTag) : رمز اللغة المستخدم فى ترجمة التواريخ و الارقام و خرائط المواقع
      يجب أن يكون موافق لرموز القياسية المعروفة ب BCP47
      كان يستخدم فى الثمة الأصلية لترجمة التواريخ فقط و لكن فى هذه الثيمة
      يستخدم بالأضافة لذلك فى ترجمة الأرقام أيضا
- **الأتجاه** (direction) :  إتجاه الكتابة و العرض فى الموقع. قيمتها يمكن أن تكون واحدة من الاتى `rtl` | `ltr` | `auto`
- **اسم خط جوجل** (googleFontName): اكتب الاسم كما هو فى ال `href` فى تاجة ال `link`, هذا يستخدم فقط فى تزليد صور [OG](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)
- **إفتراضى** (default): إستخدام هذه الترجمة بشكل إفتراضى, إذا لم يتم تحديد أى ترجمة كترجمة إفتراضية سوف يتم إستخدام أول ترجمة فى الإعدادات

#### **عمل ترجمتك الخاصة**

1. إنشئ ملف فى `src/i18n/locales` باسم على النهج الاتى `ts.مفتاح_الترجمة` حيث `مفتاح_الترجمة` هو اسم المفتاح الذى سيكون فى إعدادات الترجمة. ليس بالضرورة أن تكون التسمية بهذا النهج و لكن هذا تفضيل شخصى  :smile:
2. عرف كائن فى جافا سكريبت من نوع `I18nStrings` (مستوردة من `i18n/types@`)
    - هذا النوع سوف يفرض كل الرسائل الضرورية اللازم ترجمتها
    - انظر [/src/i18n/types.ts](/src/i18n/types.ts) لمعرفة كل الرسائل الضرورية
    - **أو** حاكى أى من الترجمات الجاهزة الموجودة مثل [/src/i18n/locales/ar.ts](src/i18n/locales/ar.ts/)  أو [/src/i18n/locales/en.ts](/src/i18n/locales/en.ts)
3. استورد ملف الترجمة الذى قمت بإنشائه فى `src/i18n/config.ts/` و عين الترجمة كقيمة لمفتاح الرسائل فى إعدادات الترجمة

### 📂 هيكلة ملف الصفح (pages)

الرجاء قراءة [وثائق استرو لهيكلة ملف الصفح لتناسب المحتوى مترجم](https://docs.astro.build/en/guides/internationalization/#create-localized-folders)

أو يمكنك تقليد ما فعلته فى ملف [src/pages](src/pages/) :smile:

#### 📄 الملفات المشتركة

فقط ملف `404.astro` و ملف `robots.txt.ts` هى المشتركة الوحيدة بين كل مجلدات الترجمات و بجب أن تكون تحت `src/pages/` مباشرة و لا تحتاج إلى نسخها فى كل مجلد ترجمة

غير ذلك فكل الملفات يجب أن توجد فى كل مجلد ترجمة

## 🧞 الأوامر

نفس [الأوامر كما فى الثيمة الأصلية](https://github.com/satnaing/astro-paper/tree/main?tab=readme-ov-file#-commands) بالإضافة إلى

| الأمر              | دلالتة                                                                                      |
| :------------------- | :------------------------------------------------------------------------------------------ |
| `npm test`           | يجرى جميع الاختبارات مرة واحدة فقط ثم يخرج [تعلم إكثر](https://vitest.dev/guide/cli.html#vitest-run) |
| `npm run test:watch` | تجرى الإختبارات فى وضع المراقبة [تعلم إكثر](https://vitest.dev/guide/cli.html#vitest-watch)   |
| `npm run coverage`   | توليد تقرير تغطية الإختبارات [تعلم إكثر](https://vitest.dev/guide/coverage.html)  |

## 🚧 المشاكل المعروفة

- تنسيق الصفحات في وضع قارئ الشاشة مكسور ويحتاج إلى إصلاح.
  - نرحب بالمساهمات!
- [صيور الشارة](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/) المولدة للمنشورات بلغات ذات اتجاه من يمين لليسار ستكون مكسورة بسبب فصور من مكتبة [ساتورى](https://www.npmjs.com/package/satori) المستخدمة فى توليد الصور
  - نرحب بالمساهمات!

</div>
