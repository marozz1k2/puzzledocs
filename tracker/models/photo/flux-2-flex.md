# flux_2_flex

Гибкая модель для контролируемой генерации изображения.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "flux_2_flex",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "flux_2_flex",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "business_operator": "{{BUSINESS_OPERATOR_USER_ID_TEXT}}",
  "business_connection": "{{BUSINESS_CONNECTION_ID}}",
  "params": {
    "resolution": "2k",
    "aspect_ratio": "4:5"
  }
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовое изображение."
}
```

## Параметры

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`flux_2_flex`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — по умолчанию `2k`.
- `params.aspect_ratio` (string, optional) — по умолчанию `auto`.

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
