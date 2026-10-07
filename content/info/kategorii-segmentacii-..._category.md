# Категории сегментации (...\_category)

В этом руководстве мы разберем инструмент для управления доступом пользователей к нейросетям — категории сегментации. Это специальный функционал Puzzle AI, который позволяет вам включать или отключать доступ к конкретным AI-моделям для отдельных пользователей или групп.

**Принцип очень прост:** если пользователю назначена определенная категория (например, `gpt_5_category`), система использует эту категорию при выборе соответствующей модели. Категория не включает отключённую модель и не отменяет ограничения тарифа, баланса или `..._mute`. Это позволяет вам гибко управлять тем, кто и какими функциями может пользоваться в вашем боте.

### **Шаг 1. Как создать категорию сегментации**

1. В конструкторе PuzzleBot перейдите в настройки вашего бота и откройте вкладку «Модерация».
2. Нажмите на иконку «плюс» (`+`) в правом верхнем углу, чтобы создать новую категорию.
3. Введите точное название категории.

{% hint style="danger" %}
**Важно:** Название должно строго соответствовать списку ниже
{% endhint %}

### **Шаг 2. Как назначить категорию пользователю**

Назначить категорию можно множеством способов, в зависимости от логики работы вашего бота:

1. Вручную через диалоги в PuzzleBot
2. С помощью действия в команде.&#x20;
3. При старте бота (/start) для всех новых пользователей.

## Категории действующих моделей

Список основных моделей сверён 07.10.2026. Это категории выбора модели; не путайте их с командами завершения `..._done` и запрещающими категориями `..._mute`.

| Название | Модель / задача |
| --- | --- |
| `openrouter_text_category` | AI21: Jamba Large 1.7 |
| `anthropic_claude_haiku_4_5_category` | Anthropic: Claude Haiku 4.5 |
| `claude_4_5_haiku_category` | Claude 4.5 Haiku |
| `deepseek_category` | DeepSeek V3.2 |
| `gpt_4_1_category` | GPT-4.1 |
| `gpt_5_category` | GPT-5.4 |
| `gpt_5_mini_category` | GPT-5.4 Mini |
| `gpt_free_category` | GPT-5.4 Nano (free) |
| `gpt_luna_category` | GPT-5.6 Luna Pro |
| `gpt_sol_category` | GPT-5.6 Sol Pro |
| `gpt_terra_category` | GPT-5.6 Terra Pro |
| `gemini_2_5_flash_category` | Gemini 2.5 Flash Lite |
| `gemini_2_5_pro_category` | Gemini 2.5 Pro |
| `gemini_3_pro_category` | Gemini 3.1 Pro |
| `gemini_3_flash_category` | Gemini 3.5 Flash |
| `grok_4_category` | Grok 4.3 |
| `vision_category` | Grok 4.3 Vision |
| `gpt_audio_category` | Voxtral Mini Transcribe |
| `web_search_category` | Web Search |
| `flux_2_flex_category` | FLUX.2 Flex |
| `flux_2_klein_category` | FLUX.2 Klein |
| `flux_2_max_category` | FLUX.2 Max |
| `flux_2_pro_category` | FLUX.2 Pro |
| `gpt_image_category` | GPT Image 2.5 |
| `kling_image_category` | Kling O1 Image |
| `midjourney_category` | Midjourney |
| `nano_banana_category` | Nano Banana 2 |
| `nano_banana_pro_category` | Nano Banana Pro |
| `seedream_category` | Seedream 5.0 Lite |
| `image_upscale_category` | Topaz Image Upscale |
| `openrouter_transcription_category` | Deepgram: Nova-3 |
| `flowmusic_category` | FlowMusic |
| `producer_category` | Producer (Google Lyria 3) |
| `suno_category` | Suno |
| `grok_video_category` | Grok Imagine Video |
| `kling_2_5_category` | Kling 2.5 Turbo |
| `kling_2_5_pro_category` | Kling 2.5 Turbo Pro |
| `kling_2_6_category` | Kling 2.6 |
| `kling_2_6_motion_control_category` | Kling 2.6 Motion Control |
| `kling_2_6_pro_category` | Kling 2.6 Pro |
| `kling_category` | Kling 3.0 |
| `kling_3_motion_control_category` | Kling 3.0 Motion Control |
| `kling_3_motion_control_pro_category` | Kling 3.0 Motion Control Pro |
| `kling_3_omni_category` | Kling 3.0 Omni |
| `kling_3_omni_edit_category` | Kling 3.0 Omni Edit |
| `kling_3_omni_edit_pro_category` | Kling 3.0 Omni Edit Pro |
| `kling_3_omni_pro_category` | Kling 3.0 Omni Pro |
| `kling_pro_category` | Kling 3.0 Pro |
| `kling_omni_category` | Kling O1 |
| `kling_omni_pro_category` | Kling O1 Pro |
| `midjourney_video_category` | Midjourney Video |
| `minimax_hailuo_category` | MiniMax Hailuo 2.3 |
| `hollywood_video_category` | Seedance 2.0 Pro |
| `veo_fast_category` | Veo 3.1 Fast |
| `veo_category` | Veo 3.1 Quality |

Для явного запроса трекера модель задаётся в `model`. Категория не заменяет это поле. Для другой модели проверьте назначенную категорию в настройках плагина.
