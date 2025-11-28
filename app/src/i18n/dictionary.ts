// src/i18n/dictionary.ts
export type SupportedLang = "en" | "zh" | "vi" | "ru";

export const LANG_LABELS: Record<SupportedLang, string> = {
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
  ru: "Русский",
};

type Dict = {
  [L in SupportedLang]: Record<string, string>;
};

export const dictionary: Dict = {
  en: {
    // footer
    languages_heading: "Languages",
    footer_tagline_title: "Empowering Global Citizenship",
    footer_tagline_body: "Mobility, security, opportunity — structured for generations.",
    footer_tagline_desc:
      "Artsoncapital helps investors, partners, and governments design compliant, investment-led residency and citizenship strategies in key jurisdictions worldwide.",
    footer_cta_global_citizen: "Become a Global Citizen",
    footer_cta_certified_partner: "Become a Certified Partner",
    footer_passportindex_title: "Passport Index",
    footer_passportindex_desc:
      "Track the world's passports, compare mobility, and explore how programs improve global access.",
    footer_passportindex_explore_label: "Explore",
    footer_passportindex_brand: "PassportIndex™",
    footer_badge_appstore_label_top: "Download on the",
    footer_badge_appstore_label_bottom: "App Store",
    footer_badge_playstore_label_top: "Get it on",
    footer_badge_playstore_label_bottom: "Google Play",
    footer_contact_tagline: "Гражданство через Инвестиции",
    footer_copyright_brand: "Artsoncapital",
    footer_copyright_rights: "All rights reserved.",

    // example for homepage / other pages later:
    hero_title: "Global Citizenship, Made Simple",
    hero_subtitle:
      "Explore residency and citizenship by investment programs worldwide.",
    hero_cta_primary: "Become a Global Citizen",
  },

  zh: {
    languages_heading: "语言",
    footer_tagline_title: "赋能全球公民身份",
    footer_tagline_body: "流动性、安全性与机会，为世代规划。",
    footer_tagline_desc:
      "Artsoncapital 协助投资者、合作伙伴和政府，在重点司法辖区设计合规的投资入籍与居留方案。",
    footer_cta_global_citizen: "成为全球公民",
    footer_cta_certified_partner: "成为认证合作伙伴",
    footer_passportindex_title: "护照指数",
    footer_passportindex_desc:
      "追踪世界各国护照，比较出行自由度，并了解项目如何提升全球通行力。",
    footer_passportindex_explore_label: "探索",
    footer_passportindex_brand: "PassportIndex™",
    footer_badge_appstore_label_top: "下载自",
    footer_badge_appstore_label_bottom: "App Store",
    footer_badge_playstore_label_top: "获取于",
    footer_badge_playstore_label_bottom: "Google Play",
    footer_contact_tagline: "投资入籍项目",
    footer_copyright_brand: "Artsoncapital",
    footer_copyright_rights: "版权所有。",

    hero_title: "全球公民身份，从此变得简单",
    hero_subtitle: "探索全球各地的投资居留与投资入籍项目。",
    hero_cta_primary: "成为全球公民",
  },

  vi: {
    languages_heading: "Ngôn ngữ",
    footer_tagline_title: "Trao quyền Công dân Toàn cầu",
    footer_tagline_body:
      "Tính linh hoạt, an ninh và cơ hội — được cấu trúc cho nhiều thế hệ.",
    footer_tagline_desc:
      "Artsoncapital hỗ trợ nhà đầu tư, đối tác và chính phủ xây dựng các chiến lược cư trú và quốc tịch dựa trên đầu tư, tuân thủ pháp lý tại các khu vực trọng điểm.",
    footer_cta_global_citizen: "Trở thành Công dân Toàn cầu",
    footer_cta_certified_partner: "Trở thành Đối tác Chứng nhận",
    footer_passportindex_title: "Passport Index",
    footer_passportindex_desc:
      "Theo dõi hộ chiếu thế giới, so sánh khả năng di chuyển và khám phá cách các chương trình cải thiện quyền tiếp cận toàn cầu.",
    footer_passportindex_explore_label: "Khám phá",
    footer_passportindex_brand: "PassportIndex™",
    footer_badge_appstore_label_top: "Tải về trên",
    footer_badge_appstore_label_bottom: "App Store",
    footer_badge_playstore_label_top: "Nhận trên",
    footer_badge_playstore_label_bottom: "Google Play",
    footer_contact_tagline: "Quốc tịch thông qua đầu tư",
    footer_copyright_brand: "Artsoncapital",
    footer_copyright_rights: "Đã đăng ký mọi quyền.",

    hero_title: "Quyền công dân toàn cầu trở nên đơn giản",
    hero_subtitle:
      "Khám phá các chương trình cư trú và quốc tịch thông qua đầu tư trên toàn thế giới.",
    hero_cta_primary: "Trở thành Công dân Toàn cầu",
  },

  ru: {
    languages_heading: "ЯЗЫКИ",
    footer_tagline_title: "Расширяя возможности глобального гражданства",
    footer_tagline_body:
      "Мобильность, безопасность и возможности — выстроенные для поколений.",
    footer_tagline_desc:
      "Artsoncapital помогает инвесторам, партнёрам и государственным органам разрабатывать соответствующие требованиям программы резидентства и гражданства через инвестиции в ключевых юрисдикциях.",
    footer_cta_global_citizen: "Стать Глобальным Гражданином",
    footer_cta_certified_partner: "Стать Сертифицированным Партнёром",
    footer_passportindex_title: "Passport Index",
    footer_passportindex_desc:
      "Отслеживайте паспорта мира, сравнивайте уровень мобильности и изучайте, как программы улучшают глобальный доступ.",
    footer_passportindex_explore_label: "Исследовать",
    footer_passportindex_brand: "PassportIndex™",
    footer_badge_appstore_label_top: "Загрузить в",
    footer_badge_appstore_label_bottom: "App Store",
    footer_badge_playstore_label_top: "Получить в",
    footer_badge_playstore_label_bottom: "Google Play",
    footer_contact_tagline: "Гражданство через инвестиции",
    footer_copyright_brand: "Artsoncapital",
    footer_copyright_rights: "Все права защищены.",

    hero_title: "Глобальное гражданство — это просто",
    hero_subtitle:
      "Изучайте программы резидентства и гражданства через инвестиции по всему миру.",
    hero_cta_primary: "Стать глобальным гражданином",
  },
};
