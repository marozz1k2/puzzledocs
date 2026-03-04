# sber_speech_large

Подробный и чистый синтез речи для длинных фрагментов.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "sber_speech_large",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "sber_speech_large",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "business_operator": "{{BUSINESS_OPERATOR_USER_ID_TEXT}}",
  "business_connection": "{{BUSINESS_CONNECTION_ID}}",
  "voice": "maxim",
  "emotion": "neutral",
  "speed": 1,
  "format": "mp3",
  "lang": "ru-RU",
  "pitch": 0
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовый аудиофайл."
}
```

## Параметры

- `prompt` / `text` (string, optional) — текст для озвучивания в TTS.
- `bot` (string, required) — идентификатор модели (`sber_speech_large`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция.
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav`.
- `lang` (string, optional) — язык.
- `pitch` (number, optional) — фиксируется в `0`.
- `stt_model` / `sttModel` (string, optional) — модель распознавания, по умолчанию `general`.

## Параметры запроса

- `bot` — имя бота/модели в Puzzle AI (например, `gpt_5`, `sora`, `gpt_image`).
- `token` — API-токен вашего бота для входящих запросов.
- `user` — ID пользователя, который написал сообщение.
- `model` — ключ нейросети, которую нужно вызвать.
- `prompt` — текст задачи для нейросети.
- `role` — дополнительная инструкция по стилю ответа (необязательно).
- `business_operator` — ID оператора бизнес-аккаунта (для бизнес-ответов).
- `business_connection` — ID соединения бизнес-аккаунта.
- `params` — объект дополнительных настроек конкретной модели (если поддерживается).
- `images` / `video_url` — входные медиа для image/video-сценариев.
- `send_answer` — отправлять результат в чат (`true` по умолчанию).
- `error_command` — команда, которая вызывается при ошибке.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
