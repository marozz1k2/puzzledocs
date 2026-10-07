# Фото-модели

Фото-модели для генерации, редактирования, стилизации и улучшения изображений.

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
  "prompt": "{{prompt}}", // обычно обязательно: описание изображения; для апскейла может быть необязательным.
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
| `prompt` | string | Зависит от модели | Текст задачи. Для апскейла/анализа изображения дополнительно или вместо него может требоваться `images`. |
| `images` | string | Зависит от модели | Ссылки, file_id или переменные с изображениями через запятую, без массива `[]`. |
| `params` | object | Нет | Вложенные настройки конкретной модели. |
| `send_answer` | boolean | Нет | `true` отправляет результат в чат, `false` сохраняет его в `{{tracker_answer}}`. |

## Модели

- [Nano Banana 2](nano-banana.md)
- [Nano Banana Pro](nano-banana-pro.md)
- [Midjourney](midjourney.md)
- [GPT Image 2.5](gpt-image.md)
- [FLUX.2 Flex](flux-2-flex.md)
- [FLUX.2 Max](flux-2-max.md)
- [FLUX.2 Pro](flux-2-pro.md)
- [FLUX.2 Klein](flux-2-klein.md)
- [Topaz Image Upscale](image-upscale.md)
- [Seedream 5.0 Lite](seedream.md)
- [Kling O1 Image](kling-image.md)
