'use strict';
// QG Avvisi: riceve le notifiche del QG e, al tocco, apre il QG (sempre e solo il QG di Giangi su claude.ai).
const QG = 'https://claude.ai/artifact/QrgELEbMwX2RK5iK35pZtM';
const vaBene = (u) => typeof u === 'string' && u.startsWith(QG) ? u : QG;
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (ev) => ev.waitUntil(self.clients.claim()));
self.addEventListener('push', (ev) => {
  let d = {};
  try { d = ev.data ? ev.data.json() : {}; } catch (e) { d = { testo: ev.data ? ev.data.text() : '' }; }
  ev.waitUntil(self.registration.showNotification(d.titolo || 'QG di Giangi', {
    body: d.testo || '',
    icon: 'icona-192.png',
    badge: 'icona-192.png',
    tag: d.tag || undefined,
    data: { url: vaBene(d.url) },
  }));
});
self.addEventListener('notificationclick', (ev) => {
  ev.notification.close();
  ev.waitUntil(self.clients.openWindow(vaBene(ev.notification.data && ev.notification.data.url)));
});
