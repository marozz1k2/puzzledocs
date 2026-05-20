# hollywood_video

Видео-модель для роликов в трёх режимах: text-to-video, первый/последний кадр и omni-reference.

## Как отправлять запрос

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`
- Формат тела: `application/json` или те же ключи в no-code параметрах.

Обязательная база для любого запроса: `bot`, `token`, `user`, `model`. Дальше добавьте содержимое задачи и параметры режима.

## Пример запроса с комментариями

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота в PuzzleBot.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота для доступа к трекеру.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии, к которой относится запрос.
  "model": "hollywood_video", // обязательно: точный ключ модели.
  "prompt": "{{prompt}}", // обязательно: описание сцены.
  "params": { // необязательно: вложенные настройки конкретной модели.
    "mode": "text_to_video", // необязательно: режим генерации.
    "duration": 5, // необязательно: длительность от 4 до 15 секунд.
    "aspect_ratio": "16:9", // необязательно: формат кадра для text_to_video.
    "seed": 12345 // необязательно: фиксирует вариативность результата.
  }
}
```

## Параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота. В PuzzleBot обычно используется `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота для авторизации запроса. |
| `user` | string | Да | ID пользователя или сессии. В PuzzleBot обычно используется `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Точный ключ вызываемой модели: `hollywood_video`. |
| `prompt` | string | Да | описание сцены. В режиме `omni_reference` можно использовать плейсхолдеры `@Image1`, `@Video1`, `@Audio1`. |
| `params.mode` | string | Нет | `text_to_video`, `first_last_frame` или `omni_reference`; по умолчанию `text_to_video`. |
| `params.duration` | integer | Нет | от `4` до `15` секунд; по умолчанию `5`. |
| `params.aspect_ratio` | string | Нет | для `text_to_video`: `16:9`, `9:16`, `1:1`, `4:3` или `3:4`; по умолчанию `16:9`. |
| `params.seed` | integer | Нет | целое число от `0` до `2147483647`. |
| `params.first_frame_url` | string | Условно | первый кадр для режима `first_last_frame`; обязателен в этом режиме. |
| `params.last_frame_url` | string | Нет | последний кадр для режима `first_last_frame`. |
| `params.references` | array | Условно | до 9 URL медиа-референсов; обязательно в режиме `omni_reference`. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` не отправляет сообщение и сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Ответ

```json
{
  "answer": "Ссылка на готовое видео."
}
```
