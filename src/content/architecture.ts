export const architectureLayers = [
  {
    id: 'clients',
    label: 'Clients',
    items: ['React Native (Expo)', 'Ops dashboard', 'Slack slash commands'],
  },
  {
    id: 'bff',
    label: 'BFF',
    items: ['Express API', 'JWT auth', 'REST + webhooks'],
  },
  {
    id: 'core',
    label: 'Core services',
    items: ['ShipStation poller (60s)', 'Exception engine', 'Alert deduplication'],
  },
  {
    id: 'notify',
    label: 'Notifications',
    items: ['Expo Push', 'Slack alerts', 'In-app ack flow'],
  },
  {
    id: 'data',
    label: 'Data',
    items: ['In-memory store', 'Push token persistence', 'Mock ShipStation mode'],
  },
]

export const architectureFlows = [
  { from: 'ShipStation', to: 'Poller', detail: 'Sync shipments every 60s' },
  { from: 'Exception engine', to: 'Alerts', detail: 'Deduped high-risk & delay rules' },
  { from: 'Mobile app', to: 'BFF', detail: 'Coordinator actions & acknowledgements' },
  { from: 'BFF', to: 'Slack / Push', detail: 'Ops notified before escalation' },
]
