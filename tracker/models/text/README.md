# Текстовые модели

Текстовые модели для генерации, редактирования и анализа текста.

## Спецификация

- Метод: `GET` — проверка доступности и статуса.
- Метод: `POST` — основной рабочий запрос.
- Базовые параметры: `prompt`, `bot`, `user`.

## Статьи

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

## Полезная информация

- Перед настройкой запроса проверьте общие и модельные tracker-поля в [единой документации](../../TRACKER_PAYLOAD.md).
- Если нужен результат быстрее — используйте короткий `prompt` и уточняйте цель одной фразой.
- Для повторяемого результата фиксируйте одинаковые значения `bot` и `user`.
