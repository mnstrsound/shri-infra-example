# infra-example

Проект доступен по следующему тестовому URL: https://morning-atoll-35110.herokuapp.com/

# Логи

![alt text](https://1.downloader.disk.yandex.ru/disk/c2ef70d59e0a9b820d034c5bb541c962074a196cf80d0038b390ba4016f456cf/57aba02b/psBZ9LyEh1VwAsqrxykZTZdgt10jn1x7xbmk-GAaYRmgzHEaS4B_wWIHO6r4Q_PhPtkE3dEgr6fWwn4zigELCg%3D%3D?uid=0&filename=2016-08-09_22-38-43.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&fsize=52654&hid=81421415da7516a5a43752ed8a192e44&media_type=image&tknv=v2&etag=c5dbad088ea414c6d5dde261c4ceb66d "Heroku logs")

Heroku - пишет следующие логи.
При релизе:
Перезагрузка нашего приложения,
завершение всех процессов SIGTERM-ом,
код выхода приложения (143),
на каком порту слушается наше приложение,
Деплой пользователем
Создание релиза, ищменения состояния с "запуска" на "готово"

Далее при обращении к нашему приложение по http, наше приложение пишет логи, и heroku пишет логи, о том,
каким методом обратились, id запроса, c какого ip, какой dyno обработывает приложение, статус ответа,
количество переданных байтов.

# build

Проект собирается после пуша в мастер ветку heroku

![alt text](https://1.downloader.disk.yandex.ru/disk/0ae2ab1412bfc23cc3b0a0d5e7adafa889781145574937b61ecb0db1c357d587/57abb1fb/psBZ9LyEh1VwAsqrxykZTdLrG5qTmIgmmnDZ4lrk8hQDTUbGq2whDx4v-YTvInnl6Hp7Ic8ffv5rFzetuDZ_SQ%3D%3D?uid=0&filename=2016-08-10_21-59-28.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&fsize=87531&hid=dc359f614d9bf74f496d536799e2ddcb&media_type=image&tknv=v2&etag=3d466ed8f69531b684138c1154d0208e "Travis Build")

# Uptime Robot

![alt text](https://1.downloader.disk.yandex.ru/disk/3fb678a8db245c1ecf0295efb7b88c17067711791ffb452955cec033fb883642/57abad88/psBZ9LyEh1VwAsqrxykZTXg_r04FjzZ23mz87BhJ2BdyKylJd5X6YvCGgZR9-bNOxFp7D3UWCiwWl30TDfBIuA%3D%3D?uid=0&filename=2016-08-09_22-38-15.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&fsize=155469&hid=a062ed77d626455c38ddfdbf8902e140&media_type=image&tknv=v2&etag=401b3589f56b9d78d066bdab691bdab3 "Uptime Robot")