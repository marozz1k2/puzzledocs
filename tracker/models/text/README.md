# Текстовые модели

Текстовые модели для генерации, редактирования, анализа текста и работы с изображениями в режиме vision.

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
  "prompt": "{{prompt}}", // обязательно для текстовых моделей: текст задачи.
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

## Динамические каталоги

- [OpenRouter text](openrouter-text.md) — 326 активных текстовых моделей. В `model` передаётся точный ключ из таблицы каталога.

## Модели

- [gpt_free](gpt-free.md)
- [gpt_5](gpt-5.md)
- [gpt_5_mini](gpt-5-mini.md)
- [gpt_4_1](gpt-4-1.md)
- [gpt_4_mini](gpt-4-mini.md)
- [gemini_3_pro](gemini-3-pro.md)
- [gemini_3_flash](gemini-3-flash.md)
- [gemini_2_5_pro](gemini-2-5-pro.md)
- [gemini_2_5_flash](gemini-2-5-flash.md)
- [claude_4_5_haiku](claude-4-5-haiku.md)
- [claude_3_5_haiku](claude-3-5-haiku.md)
- [grok_4](grok-4.md)
- [deepseek](deepseek.md)
- [web_search](web-search.md)
- [vision](vision.md)
- [Создание документов](document-creation.md)
