# yandex_speech_large

Качественный синтез речи для финального пользовательского аудио.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "{{BOT_USERNAME_TEXT}}",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "yandex_speech_large",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "voice": "filipp",
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

- `prompt` / `text` (string, required) — текст для озвучивания.
- `bot` (string, required) — username бота, всегда передавайте `{{BOT_USERNAME_TEXT}}`.
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция (нормализуется под профиль голоса).
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav` (`ogg_opus` и `opus` нормализуются в `ogg`).
- `lang` (string, optional) — язык (обычно `ru-RU`).
- `pitch` (number, optional) — высота голоса.

## Параметры запроса

| Ключ | Значение | Описание |
| --- | --- | --- |
| `bot` | `{{BOT_USERNAME_TEXT}}` | Username бота в PuzzleBot (всегда используйте переменную). |
| `token` | `[Ваш API-токен]` | API-токен бота для авторизации запроса. |
| `user` | `{{USER_ID_TEXT}}` | Идентификатор пользователя/сессии. |
| `model` | ключ модели (например, `gpt_5`) | Технический идентификатор модели, которую нужно вызвать. |
| `prompt` | `{{prompt}}` | Текст задачи для модели. |
| `role` | `[текст роли]` | Дополнительная инструкция по стилю ответа (необязательно). |
| `params` | JSON-объект | Дополнительные параметры конкретной модели (если поддерживаются). |
| `images` | `url1,url2` | Ссылки на входные изображения через запятую, без массива `[]`. |
| `video_url` | `https://...` | Ссылка на входное видео для video-сценариев (при необходимости). |
| `send_answer` | `true` | Отправлять ли результат в чат (`true` по умолчанию). |
