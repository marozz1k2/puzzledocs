# Видео-модели

Видео-модели для генерации роликов по тексту и референсам.

## Как отправлять запросы

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

Минимальная база всегда одна: `bot`, `token`, `user`, `model`. Остальные поля зависят от выбранной модели и описаны в её статье.

## Базовый пример

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "model_key", // обязательно: ключ нужной модели из списка ниже.
  "prompt": "{{prompt}}", // обязательно: описание видео, сцены и движения.
  "send_answer": true // необязательно: отправить ответ пользователю; по умолчанию `true`.
}
```

## Базовые параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота: `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота. |
| `user` | string | Да | ID пользователя или сессии: `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Ключ модели из списка ниже. |
| `prompt` | string | Зависит от модели | Описание сцены и движения. Для работы по референсу добавьте исходники, указанные в статье модели. |
| `images` | string | Зависит от модели | Ссылки, file_id или переменные с изображениями через запятую, без массива `[]`. |
| `params` | object | Нет | Вложенные настройки конкретной модели. |
| `send_answer` | boolean | Нет | `true` отправляет результат в чат, `false` отключает отправку в чат. Сохранение в `{{tracker_answer}}` включается отдельно в настройках бота. |

## Модели

- [Veo 3.1 Quality](veo.md)
- [Veo 3.1 Fast](veo-fast.md)
- [Grok Imagine Video](grok-video.md)
- [Seedance 2.0 Pro](hollywood-video.md)
- [Midjourney Video](midjourney-video.md)
- [MiniMax Hailuo 2.3](minimax-hailuo.md)
- [Kling 3.0](kling.md)
- [Kling 3.0 Pro](kling-pro.md)
- [Kling 2.5 Turbo](kling-2-5.md)
- [Kling 2.5 Turbo Pro](kling-2-5-pro.md)
- [Kling 2.6](kling-2-6.md)
- [Kling 2.6 Pro](kling-2-6-pro.md)
- [Kling 2.6 Motion Control](kling-2-6-motion-control.md)
- [Kling 3.0 Motion Control](kling-3-motion-control.md)
- [Kling 3.0 Motion Control Pro](kling-3-motion-control-pro.md)
- [Kling 3.0 Omni](kling-3-omni.md)
- [Kling 3.0 Omni Pro](kling-3-omni-pro.md)
- [Kling 3.0 Omni Edit](kling-3-omni-edit.md)
- [Kling 3.0 Omni Edit Pro](kling-3-omni-edit-pro.md)
- [Kling O1](kling-omni.md)
- [Kling O1 Pro](kling-omni-pro.md)
