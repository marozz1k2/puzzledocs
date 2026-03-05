# veo

Видео-генерация из текста для универсальных сценариев.

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
  "model": "veo",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "images": "https://example.com/reference1.jpg,https://example.com/reference2.jpg",
  "params": {
    "resolution": "1080p"
  }
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовое видео."
}
```

## Параметры

- `prompt` (string, required) — описание видео.
- `bot` (string, required) — username бота, всегда передавайте `{{BOT_USERNAME_TEXT}}`.
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (string, optional) — до 2 изображений.
- `params.resolution` (string, optional) — по умолчанию `1080p`.

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
