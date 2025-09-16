import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "Klaivr Docs",
  description: "Documentation officielle Klaivr",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Website", link: "https://www.klaivr.com/" },
      { text: "Changelog", link: "/whats-new" },
    ],
    sidebar: [
      {
        text: "Discover Klaivr",
        collapsed: false,
        items: [
          { text: "What's Klaivr?", link: "/guide/discover/whats-klaivr" },
          { text: "Key Features", link: "/guide/discover/features" },
          { text: "What's new?", link: "/whats-new" },
          { text: "Getting started", link: "/guide/getting-started" },
        ],
      },

      {
        text: "Klaivr Core",
        collapsed: false,
        items: [
          {
            text: "Agents",
            collapsed: false,
            items: [
              { text: "Overview", link: "/guide/agents/overview" },
              { text: "Créer un agent", link: "/guide/agents/create" },
              {
                text: "Bonnes pratiques",
                link: "/guide/agents/best-practices",
              },
            ],
          },
          {
            text: "Channels",
            collapsed: false,
            items: [
              { text: "Overview", link: "/guide/channels/overview" },
              { text: "Créer un channel", link: "/guide/channels/create" },
              {
                text: "Inviter des agents",
                link: "/guide/channels/invite-agents",
              },
              {
                text: "Collaborer en équipe",
                link: "/guide/channels/collaboration",
              },
            ],
          },
        ],
      },

      {
        text: "Integrations",
        collapsed: false,
        items: [
          { text: "Overview", link: "/guide/integrations/overview" },
          { text: "CRM", link: "/guide/integrations/crm" },
          { text: "Productivity", link: "/guide/integrations/productivity" },
          { text: "Analytics & SEO", link: "/guide/integrations/analytics" },
          { text: "Social Media", link: "/guide/integrations/social" },
          { text: "Communication", link: "/guide/integrations/communication" },
        ],
      },

      {
        text: "Company & Admin",
        collapsed: false,
        items: [
          { text: "Teams & Members", link: "/guide/company/teams-members" },
          { text: "Roles & Permissions", link: "/guide/company/roles" },
          { text: "Billing", link: "/guide/company/billing" },
          { text: "Security & Privacy", link: "/guide/company/security" },
        ],
      },

      {
        text: "Apps",
        collapsed: false,
        items: [
          { text: "Microsoft Teams", link: "/guide/apps/teams" },
          { text: "Slack", link: "/guide/apps/slack" },
        ],
      },

      {
        text: "Support",
        collapsed: false,
        items: [
          { text: "FAQ", link: "/support/faq" },
          { text: "Troubleshooting", link: "/support/troubleshooting" },
          { text: "Contact", link: "/support/contact" },
        ],
      },
    ],

    socialLinks: [
      { icon: "linkedin", link: "https://linkedin.com/company/klaivr" },
      { icon: "github", link: "https://github.com/klaivr" },
    ],
  },
});
