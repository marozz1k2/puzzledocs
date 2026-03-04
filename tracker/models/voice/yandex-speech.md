# yandex_speech

Быстрый синтез речи для стандартных голосовых задач.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "yandex_speech",
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

- `prompt` / `text` (string, required) — текст для озвучивания.
- `bot` (string, required) — идентификатор модели (`yandex_speech`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция (нормализуется под профиль голоса).
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav` (`ogg_opus` и `opus` нормализуются в `ogg`).
- `lang` (string, optional) — язык (обычно `ru-RU`).
- `pitch` (number, optional) — высота голоса.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
