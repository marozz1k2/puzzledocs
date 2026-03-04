# flux_2_max

Максимальное качество изображения для презентационных задач.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "flux_2_max",
  "user": "user_123"
}
```

### Пример ответа

```json
{
  "ok": true,
  "result": "Готово"
}
```

## Параметры

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`flux_2_max`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — по умолчанию `2k`.
- `params.aspect_ratio` (string, optional) — по умолчанию `auto`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
