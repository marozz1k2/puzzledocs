# OpenRouter text

Динамический каталог текстовых OpenRouter-моделей для генерации, анализа, кода, reasoning-задач и мультимодальных ответов через no-code API.

Список ниже актуален на 13.06.2026 и включает активные модели трекера. В трекер передаётся не провайдерский ID, а ключ из колонки `Ключ модели`.

## Как отправлять запрос

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`
- Формат тела: `application/json` или те же ключи в no-code параметрах.

Обязательная база для любого запроса: `bot`, `token`, `user`, `model`. Для OpenRouter-моделей поле `model` должно содержать точный ключ модели из таблицы ниже.

## Пример запроса с комментариями

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота в PuzzleBot.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота для доступа к трекеру.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии, к которой относится запрос.
  "model": "openai_gpt_5_4_pro", // обязательно: точный ключ OpenRouter-модели из таблицы ниже.
  "prompt": "Составь краткий план запуска продукта.", // обязательно для простого no-code сценария: текст задачи.
  "role": "[текст роли]", // необязательно: роль, стиль или ограничения для модели.
  "send_answer": true // необязательно: отправить результат пользователю; по умолчанию true.
}
```

## Параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота. В PuzzleBot обычно используется `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота для авторизации запроса. |
| `user` | string | Да | ID пользователя или сессии. В PuzzleBot обычно используется `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Точный ключ OpenRouter-модели из таблицы ниже. |
| `prompt` | string | Да | Текст задачи для простого no-code запроса. |
| `role` | string | Нет | Дополнительная инструкция для модели: роль, стиль ответа, ограничения. |
| `params.messages` | array | Нет | Расширенный формат сообщений OpenRouter chat-completions. Используйте только если нужно передать мультимодальный контент или историю вручную. |
| `params.max_tokens` | number | Нет | Ограничение длины ответа, если поддерживается выбранной моделью. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Категории и списание

| Поле | Значение |
| --- | --- |
| Категория сегментации | `openrouter_text_category` |
| Команда после успешного выполнения | Индивидуальная: `<model_key>_done`, например `openai_gpt_5_4_pro_done`. |
| Стоимость | От 1 до 500 AI-запросов за вызов, точная стоимость указана в таблице. |
| Количество активных моделей | 326 |

## Активные модели

| Ключ модели | Название | Провайдерский ID | Стоимость, AI |
| --- | --- | --- | --- |
| `ai21_jamba_large_1_7` | AI21: Jamba Large 1.7 | `ai21/jamba-large-1.7` | 15 |
| `aion_labs_aion_1_0` | AionLabs: Aion-1.0 | `aion-labs/aion-1.0` | 27 |
| `aion_labs_aion_1_0_mini` | AionLabs: Aion-1.0-Mini | `aion-labs/aion-1.0-mini` | 20 |
| `aion_labs_aion_2_0` | AionLabs: Aion-2.0 | `aion-labs/aion-2.0` | 25 |
| `aion_labs_aion_rp_llama_3_1_8b` | AionLabs: Aion-RP 1.0 (8B) | `aion-labs/aion-rp-llama-3.1-8b` | 25 |
| `allenai_olmo_3_32b_think` | AllenAI: Olmo 3 32B Think | `allenai/olmo-3-32b-think` | 11 |
| `amazon_nova_2_lite_v1` | Amazon: Nova 2 Lite | `amazon/nova-2-lite-v1` | 30 |
| `amazon_nova_lite_v1` | Amazon: Nova Lite 1.0 | `amazon/nova-lite-v1` | 2 |
| `amazon_nova_micro_v1` | Amazon: Nova Micro 1.0 | `amazon/nova-micro-v1` | 2 |
| `amazon_nova_premier_v1` | Amazon: Nova Premier 1.0 | `amazon/nova-premier-v1` | 37 |
| `amazon_nova_pro_v1` | Amazon: Nova Pro 1.0 | `amazon/nova-pro-v1` | 14 |
| `anthropic_claude_3_5_haiku` | Anthropic: Claude 3.5 Haiku | `anthropic/claude-3.5-haiku` | 27 |
| `anthropic_claude_3_haiku` | Anthropic: Claude 3 Haiku | `anthropic/claude-3-haiku` | 14 |
| `anthropic_claude_fable_5` | Anthropic: Claude Fable 5 | `anthropic/claude-fable-5` | 147 |
| `latest_anthropic_claude_fable_latest` | Anthropic: Claude Fable Latest | `~anthropic/claude-fable-latest` | 147 |
| `anthropic_claude_haiku_4_5` | Anthropic: Claude Haiku 4.5 | `anthropic/claude-haiku-4.5` | 11 |
| `latest_anthropic_claude_haiku_latest` | Anthropic Claude Haiku Latest | `~anthropic/claude-haiku-latest` | 11 |
| `anthropic_claude_opus_4` | Anthropic: Claude Opus 4 | `anthropic/claude-opus-4` | 221 |
| `anthropic_claude_opus_4_1` | Anthropic: Claude Opus 4.1 | `anthropic/claude-opus-4.1` | 221 |
| `anthropic_claude_opus_4_5` | Anthropic: Claude Opus 4.5 | `anthropic/claude-opus-4.5` | 74 |
| `anthropic_claude_opus_4_6` | Anthropic: Claude Opus 4.6 | `anthropic/claude-opus-4.6` | 74 |
| `anthropic_claude_opus_4_6_fast` | Anthropic: Claude Opus 4.6 (Fast) | `anthropic/claude-opus-4.6-fast` | 441 |
| `anthropic_claude_opus_4_7` | Anthropic: Claude Opus 4.7 | `anthropic/claude-opus-4.7` | 74 |
| `anthropic_claude_opus_4_7_fast` | Anthropic: Claude Opus 4.7 (Fast) | `anthropic/claude-opus-4.7-fast` | 441 |
| `anthropic_claude_opus_4_8` | Anthropic: Claude Opus 4.8 | `anthropic/claude-opus-4.8` | 74 |
| `anthropic_claude_opus_4_8_fast` | Anthropic: Claude Opus 4.8 (Fast) | `anthropic/claude-opus-4.8-fast` | 147 |
| `latest_anthropic_claude_opus_latest` | Anthropic: Claude Opus Latest | `~anthropic/claude-opus-latest` | 74 |
| `anthropic_claude_sonnet_4` | Anthropic: Claude Sonnet 4 | `anthropic/claude-sonnet-4` | 44 |
| `anthropic_claude_sonnet_4_5` | Anthropic: Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` | 44 |
| `anthropic_claude_sonnet_4_6` | Anthropic: Claude Sonnet 4.6 | `anthropic/claude-sonnet-4.6` | 44 |
| `latest_anthropic_claude_sonnet_latest` | Anthropic Claude Sonnet Latest | `~anthropic/claude-sonnet-latest` | 44 |
| `arcee_ai_coder_large` | Arcee AI: Coder Large | `arcee-ai/coder-large` | 14 |
| `arcee_ai_trinity_large_thinking` | Arcee AI: Trinity Large Thinking | `arcee-ai/trinity-large-thinking` | 13 |
| `arcee_ai_trinity_mini` | Arcee AI: Trinity Mini | `arcee-ai/trinity-mini` | 2 |
| `arcee_ai_virtuoso_large` | Arcee AI: Virtuoso Large | `arcee-ai/virtuoso-large` | 18 |
| `baidu_ernie_4_5_vl_424b_a47b` | Baidu: ERNIE 4.5 VL 424B A47B | `baidu/ernie-4.5-vl-424b-a47b` | 15 |
| `openrouter_bodybuilder` | Body Builder (beta) | `openrouter/bodybuilder` | 1 |
| `bytedance_seed_seed_1_6` | ByteDance Seed: Seed 1.6 | `bytedance-seed/seed-1.6` | 23 |
| `bytedance_seed_seed_1_6_flash` | ByteDance Seed: Seed 1.6 Flash | `bytedance-seed/seed-1.6-flash` | 2 |
| `bytedance_seed_seed_2_0_lite` | ByteDance Seed: Seed-2.0-Lite | `bytedance-seed/seed-2.0-lite` | 23 |
| `bytedance_seed_seed_2_0_mini` | ByteDance Seed: Seed-2.0-Mini | `bytedance-seed/seed-2.0-mini` | 10 |
| `bytedance_ui_tars_1_5_7b` | ByteDance: UI-TARS 7B | `bytedance/ui-tars-1.5-7b` | 2 |
| `cohere_command_a` | Cohere: Command A | `cohere/command-a` | 28 |
| `cohere_command_r_08_2024` | Cohere: Command R (08-2024) | `cohere/command-r-08-2024` | 11 |
| `cohere_command_r_plus_08_2024` | Cohere: Command R+ (08-2024) | `cohere/command-r-plus-08-2024` | 28 |
| `cohere_command_r7b_12_2024` | Cohere: Command R7B (12-2024) | `cohere/command-r7b-12-2024` | 2 |
| `deepcogito_cogito_v2_1_671b` | Deep Cogito: Cogito v2.1 671B | `deepcogito/cogito-v2.1-671b` | 26 |
| `deepseek_deepseek_chat` | DeepSeek: DeepSeek V3 | `deepseek/deepseek-chat` | 12 |
| `deepseek_deepseek_chat_v3_0324` | DeepSeek: DeepSeek V3 0324 | `deepseek/deepseek-chat-v3-0324` | 12 |
| `deepseek_deepseek_chat_v3_1` | DeepSeek: DeepSeek V3.1 | `deepseek/deepseek-chat-v3.1` | 12 |
| `deepseek_deepseek_v3_1_terminus` | DeepSeek: DeepSeek V3.1 Terminus | `deepseek/deepseek-v3.1-terminus` | 13 |
| `deepseek_deepseek_v3_2` | DeepSeek: DeepSeek V3.2 | `deepseek/deepseek-v3.2` | 10 |
| `deepseek_deepseek_v3_2_exp` | DeepSeek: DeepSeek V3.2 Exp | `deepseek/deepseek-v3.2-exp` | 11 |
| `deepseek_deepseek_v4_flash` | DeepSeek: DeepSeek V4 Flash | `deepseek/deepseek-v4-flash` | 2 |
| `deepseek_deepseek_v4_pro` | DeepSeek: DeepSeek V4 Pro | `deepseek/deepseek-v4-pro` | 14 |
| `deepseek_deepseek_r1` | DeepSeek: R1 | `deepseek/deepseek-r1` | 36 |
| `deepseek_deepseek_r1_0528` | DeepSeek: R1 0528 | `deepseek/deepseek-r1-0528` | 28 |
| `deepseek_deepseek_r1_distill_llama_70b` | DeepSeek: R1 Distill Llama 70B | `deepseek/deepseek-r1-distill-llama-70b` | 15 |
| `deepseek_deepseek_r1_distill_qwen_32b` | DeepSeek: R1 Distill Qwen 32B | `deepseek/deepseek-r1-distill-qwen-32b` | 11 |
| `essentialai_rnj_1_instruct` | EssentialAI: Rnj 1 Instruct | `essentialai/rnj-1-instruct` | 2 |
| `openrouter_free` | Free Models Router | `openrouter/free` | 1 |
| `google_gemini_2_5_flash` | Google: Gemini 2.5 Flash | `google/gemini-2.5-flash` | 30 |
| `google_gemini_2_5_flash_lite` | Google: Gemini 2.5 Flash Lite | `google/gemini-2.5-flash-lite` | 10 |
| `google_gemini_2_5_flash_lite_preview_09_2025` | Google: Gemini 2.5 Flash Lite Preview 09-2025 | `google/gemini-2.5-flash-lite-preview-09-2025` | 10 |
| `google_gemini_2_5_pro` | Google: Gemini 2.5 Pro | `google/gemini-2.5-pro` | 25 |
| `google_gemini_2_5_pro_preview_05_06` | Google: Gemini 2.5 Pro Preview 05-06 | `google/gemini-2.5-pro-preview-05-06` | 25 |
| `google_gemini_2_5_pro_preview` | Google: Gemini 2.5 Pro Preview 06-05 | `google/gemini-2.5-pro-preview` | 25 |
| `google_gemini_3_1_flash_lite` | Google: Gemini 3.1 Flash Lite | `google/gemini-3.1-flash-lite` | 15 |
| `google_gemini_3_1_flash_lite_preview` | Google: Gemini 3.1 Flash Lite Preview | `google/gemini-3.1-flash-lite-preview` | 15 |
| `google_gemini_3_1_pro_preview` | Google: Gemini 3.1 Pro Preview | `google/gemini-3.1-pro-preview` | 30 |
| `google_gemini_3_1_pro_preview_customtools` | Google: Gemini 3.1 Pro Preview Custom Tools | `google/gemini-3.1-pro-preview-customtools` | 30 |
| `google_gemini_3_5_flash` | Google: Gemini 3.5 Flash | `google/gemini-3.5-flash` | 19 |
| `google_gemini_3_flash_preview` | Google: Gemini 3 Flash Preview | `google/gemini-3-flash-preview` | 40 |
| `latest_google_gemini_flash_latest` | Google Gemini Flash Latest | `~google/gemini-flash-latest` | 19 |
| `latest_google_gemini_pro_latest` | Google Gemini Pro Latest | `~google/gemini-pro-latest` | 30 |
| `google_gemma_2_27b_it` | Google: Gemma 2 27B | `google/gemma-2-27b-it` | 14 |
| `google_gemma_3_12b_it` | Google: Gemma 3 12B | `google/gemma-3-12b-it` | 2 |
| `google_gemma_3_27b_it` | Google: Gemma 3 27B | `google/gemma-3-27b-it` | 2 |
| `google_gemma_3_4b_it` | Google: Gemma 3 4B | `google/gemma-3-4b-it` | 2 |
| `google_gemma_3n_e4b_it` | Google: Gemma 3n 4B | `google/gemma-3n-e4b-it` | 2 |
| `google_gemma_4_26b_a4b_it` | Google: Gemma 4 26B A4B | `google/gemma-4-26b-a4b-it` | 2 |
| `google_gemma_4_26b_a4b_it_free` | Google: Gemma 4 26B A4B  (free) | `google/gemma-4-26b-a4b-it:free` | 1 |
| `google_gemma_4_31b_it` | Google: Gemma 4 31B | `google/gemma-4-31b-it` | 8 |
| `google_gemma_4_31b_it_free` | Google: Gemma 4 31B (free) | `google/gemma-4-31b-it:free` | 1 |
| `ibm_granite_granite_4_0_h_micro` | IBM: Granite 4.0 Micro | `ibm-granite/granite-4.0-h-micro` | 2 |
| `ibm_granite_granite_4_1_8b` | IBM: Granite 4.1 8B | `ibm-granite/granite-4.1-8b` | 2 |
| `inception_mercury_2` | Inception: Mercury 2 | `inception/mercury-2` | 12 |
| `inclusionai_ling_2_6_1t` | inclusionAI: Ling-2.6-1T | `inclusionai/ling-2.6-1t` | 11 |
| `inclusionai_ling_2_6_flash` | inclusionAI: Ling-2.6-flash | `inclusionai/ling-2.6-flash` | 2 |
| `inclusionai_ring_2_6_1t` | inclusionAI: Ring-2.6-1T | `inclusionai/ring-2.6-1t` | 11 |
| `inflection_inflection_3_pi` | Inflection: Inflection 3 Pi | `inflection/inflection-3-pi` | 28 |
| `inflection_inflection_3_productivity` | Inflection: Inflection 3 Productivity | `inflection/inflection-3-productivity` | 28 |
| `kwaipilot_kat_coder_pro_v2` | Kwaipilot: KAT-Coder-Pro V2 | `kwaipilot/kat-coder-pro-v2` | 14 |
| `liquid_lfm_2_24b_a2b` | LiquidAI: LFM2-24B-A2B | `liquid/lfm-2-24b-a2b` | 2 |
| `liquid_lfm_2_5_1_2b_instruct_free` | LiquidAI: LFM2.5-1.2B-Instruct (free) | `liquid/lfm-2.5-1.2b-instruct:free` | 1 |
| `liquid_lfm_2_5_1_2b_thinking_free` | LiquidAI: LFM2.5-1.2B-Thinking (free) | `liquid/lfm-2.5-1.2b-thinking:free` | 1 |
| `meta_llama_llama_guard_3_8b` | Llama Guard 3 8B | `meta-llama/llama-guard-3-8b` | 10 |
| `anthracite_org_magnum_v4_72b` | Magnum v4 72B | `anthracite-org/magnum-v4-72b` | 13 |
| `mancer_weaver` | Mancer: Weaver (alpha) | `mancer/weaver` | 15 |
| `meta_llama_llama_3_1_70b_instruct` | Meta: Llama 3.1 70B Instruct | `meta-llama/llama-3.1-70b-instruct` | 11 |
| `meta_llama_llama_3_1_8b_instruct` | Meta: Llama 3.1 8B Instruct | `meta-llama/llama-3.1-8b-instruct` | 2 |
| `meta_llama_llama_3_2_11b_vision_instruct` | Meta: Llama 3.2 11B Vision Instruct | `meta-llama/llama-3.2-11b-vision-instruct` | 11 |
| `meta_llama_llama_3_2_1b_instruct` | Meta: Llama 3.2 1B Instruct | `meta-llama/llama-3.2-1b-instruct` | 2 |
| `meta_llama_llama_3_2_3b_instruct` | Meta: Llama 3.2 3B Instruct | `meta-llama/llama-3.2-3b-instruct` | 2 |
| `meta_llama_llama_3_2_3b_instruct_free` | Meta: Llama 3.2 3B Instruct (free) | `meta-llama/llama-3.2-3b-instruct:free` | 1 |
| `meta_llama_llama_3_3_70b_instruct` | Meta: Llama 3.3 70B Instruct | `meta-llama/llama-3.3-70b-instruct` | 4 |
| `meta_llama_llama_3_3_70b_instruct_free` | Meta: Llama 3.3 70B Instruct (free) | `meta-llama/llama-3.3-70b-instruct:free` | 1 |
| `meta_llama_llama_3_70b_instruct` | Meta: Llama 3 70B Instruct | `meta-llama/llama-3-70b-instruct` | 13 |
| `meta_llama_llama_3_8b_instruct` | Meta: Llama 3 8B Instruct | `meta-llama/llama-3-8b-instruct` | 2 |
| `meta_llama_llama_4_maverick` | Meta: Llama 4 Maverick | `meta-llama/llama-4-maverick` | 11 |
| `meta_llama_llama_4_scout` | Meta: Llama 4 Scout | `meta-llama/llama-4-scout` | 2 |
| `meta_llama_llama_guard_4_12b` | Meta: Llama Guard 4 12B | `meta-llama/llama-guard-4-12b` | 2 |
| `microsoft_phi_4` | Microsoft: Phi 4 | `microsoft/phi-4` | 2 |
| `microsoft_phi_4_mini_instruct` | Microsoft: Phi 4 Mini Instruct | `microsoft/phi-4-mini-instruct` | 5 |
| `minimax_minimax_01` | MiniMax: MiniMax-01 | `minimax/minimax-01` | 14 |
| `minimax_minimax_m1` | MiniMax: MiniMax M1 | `minimax/minimax-m1` | 28 |
| `minimax_minimax_m2` | MiniMax: MiniMax M2 | `minimax/minimax-m2` | 13 |
| `minimax_minimax_m2_1` | MiniMax: MiniMax M2.1 | `minimax/minimax-m2.1` | 13 |
| `minimax_minimax_m2_5` | MiniMax: MiniMax M2.5 | `minimax/minimax-m2.5` | 13 |
| `minimax_minimax_m2_7` | MiniMax: MiniMax M2.7 | `minimax/minimax-m2.7` | 13 |
| `minimax_minimax_m2_her` | MiniMax: MiniMax M2-her | `minimax/minimax-m2-her` | 14 |
| `minimax_minimax_m3` | MiniMax: MiniMax M3 | `minimax/minimax-m3` | 14 |
| `mistralai_codestral_2508` | Mistral: Codestral 2508 | `mistralai/codestral-2508` | 13 |
| `mistralai_devstral_2512` | Mistral: Devstral 2 2512 | `mistralai/devstral-2512` | 25 |
| `mistralai_mistral_large` | Mistral Large | `mistralai/mistral-large` | 13 |
| `mistralai_mistral_large_2407` | Mistral Large 2407 | `mistralai/mistral-large-2407` | 13 |
| `mistralai_ministral_14b_2512` | Mistral: Ministral 3 14B 2512 | `mistralai/ministral-14b-2512` | 2 |
| `mistralai_ministral_3b_2512` | Mistral: Ministral 3 3B 2512 | `mistralai/ministral-3b-2512` | 2 |
| `mistralai_ministral_8b_2512` | Mistral: Ministral 3 8B 2512 | `mistralai/ministral-8b-2512` | 2 |
| `mistralai_mistral_large_2512` | Mistral: Mistral Large 3 2512 | `mistralai/mistral-large-2512` | 19 |
| `mistralai_mistral_medium_3` | Mistral: Mistral Medium 3 | `mistralai/mistral-medium-3` | 25 |
| `mistralai_mistral_medium_3_1` | Mistral: Mistral Medium 3.1 | `mistralai/mistral-medium-3.1` | 25 |
| `mistralai_mistral_medium_3_5` | Mistral: Mistral Medium 3.5 | `mistralai/mistral-medium-3-5` | 14 |
| `mistralai_mistral_nemo` | Mistral: Mistral Nemo | `mistralai/mistral-nemo` | 2 |
| `mistralai_mistral_small_24b_instruct_2501` | Mistral: Mistral Small 3 | `mistralai/mistral-small-24b-instruct-2501` | 2 |
| `mistralai_mistral_small_3_1_24b_instruct` | Mistral: Mistral Small 3.1 24B | `mistralai/mistral-small-3.1-24b-instruct` | 12 |
| `mistralai_mistral_small_3_2_24b_instruct` | Mistral: Mistral Small 3.2 24B | `mistralai/mistral-small-3.2-24b-instruct` | 2 |
| `mistralai_mistral_small_2603` | Mistral: Mistral Small 4 | `mistralai/mistral-small-2603` | 11 |
| `mistralai_mixtral_8x22b_instruct` | Mistral: Mixtral 8x22B Instruct | `mistralai/mixtral-8x22b-instruct` | 13 |
| `mistralai_mistral_saba` | Mistral: Saba | `mistralai/mistral-saba` | 11 |
| `mistralai_voxtral_small_24b_2507` | Mistral: Voxtral Small 24B 2507 | `mistralai/voxtral-small-24b-2507` | 2 |
| `moonshotai_kimi_k2` | MoonshotAI: Kimi K2 0711 | `moonshotai/kimi-k2` | 31 |
| `moonshotai_kimi_k2_0905` | MoonshotAI: Kimi K2 0905 | `moonshotai/kimi-k2-0905` | 35 |
| `moonshotai_kimi_k2_5` | MoonshotAI: Kimi K2.5 | `moonshotai/kimi-k2.5` | 22 |
| `moonshotai_kimi_k2_6` | MoonshotAI: Kimi K2.6 | `moonshotai/kimi-k2.6` | 15 |
| `moonshotai_kimi_k2_thinking` | MoonshotAI: Kimi K2 Thinking | `moonshotai/kimi-k2-thinking` | 35 |
| `latest_moonshotai_kimi_latest` | MoonshotAI Kimi Latest | `~moonshotai/kimi-latest` | 15 |
| `morph_morph_v3_fast` | Morph: Morph V3 Fast | `morph/morph-v3-fast` | 19 |
| `morph_morph_v3_large` | Morph: Morph V3 Large | `morph/morph-v3-large` | 30 |
| `gryphe_mythomax_l2_13b` | MythoMax 13B | `gryphe/mythomax-l2-13b` | 2 |
| `nex_agi_nex_n2_pro_free` | Nex AGI: Nex-N2-Pro (free) | `nex-agi/nex-n2-pro:free` | 1 |
| `nousresearch_hermes_3_llama_3_1_405b` | Nous: Hermes 3 405B Instruct | `nousresearch/hermes-3-llama-3.1-405b` | 19 |
| `nousresearch_hermes_3_llama_3_1_405b_free` | Nous: Hermes 3 405B Instruct (free) | `nousresearch/hermes-3-llama-3.1-405b:free` | 1 |
| `nousresearch_hermes_3_llama_3_1_70b` | Nous: Hermes 3 70B Instruct | `nousresearch/hermes-3-llama-3.1-70b` | 14 |
| `nousresearch_hermes_4_405b` | Nous: Hermes 4 405B | `nousresearch/hermes-4-405b` | 14 |
| `nousresearch_hermes_4_70b` | Nous: Hermes 4 70B | `nousresearch/hermes-4-70b` | 10 |
| `nvidia_llama_3_3_nemotron_super_49b_v1_5` | NVIDIA: Llama 3.3 Nemotron Super 49B V1.5 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | 11 |
| `nvidia_nemotron_3_5_content_safety_free` | NVIDIA: Nemotron 3.5 Content Safety (free) | `nvidia/nemotron-3.5-content-safety:free` | 1 |
| `nvidia_nemotron_3_nano_30b_a3b` | NVIDIA: Nemotron 3 Nano 30B A3B | `nvidia/nemotron-3-nano-30b-a3b` | 2 |
| `nvidia_nemotron_3_nano_30b_a3b_free` | NVIDIA: Nemotron 3 Nano 30B A3B (free) | `nvidia/nemotron-3-nano-30b-a3b:free` | 1 |
| `nvidia_nemotron_3_nano_omni_30b_a3b_reasoning_free` | NVIDIA: Nemotron 3 Nano Omni (free) | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` | 1 |
| `nvidia_nemotron_3_super_120b_a12b` | NVIDIA: Nemotron 3 Super | `nvidia/nemotron-3-super-120b-a12b` | 10 |
| `nvidia_nemotron_3_super_120b_a12b_free` | NVIDIA: Nemotron 3 Super (free) | `nvidia/nemotron-3-super-120b-a12b:free` | 1 |
| `nvidia_nemotron_3_ultra_550b_a55b` | NVIDIA: Nemotron 3 Ultra | `nvidia/nemotron-3-ultra-550b-a55b` | 33 |
| `nvidia_nemotron_3_ultra_550b_a55b_free` | NVIDIA: Nemotron 3 Ultra (free) | `nvidia/nemotron-3-ultra-550b-a55b:free` | 1 |
| `nvidia_nemotron_nano_12b_v2_vl_free` | NVIDIA: Nemotron Nano 12B 2 VL (free) | `nvidia/nemotron-nano-12b-v2-vl:free` | 1 |
| `nvidia_nemotron_nano_9b_v2_free` | NVIDIA: Nemotron Nano 9B V2 (free) | `nvidia/nemotron-nano-9b-v2:free` | 1 |
| `openai_gpt_3_5_turbo` | OpenAI: GPT-3.5 Turbo | `openai/gpt-3.5-turbo` | 19 |
| `openai_gpt_3_5_turbo_16k` | OpenAI: GPT-3.5 Turbo 16k | `openai/gpt-3.5-turbo-16k` | 12 |
| `openai_gpt_3_5_turbo_instruct` | OpenAI: GPT-3.5 Turbo Instruct | `openai/gpt-3.5-turbo-instruct` | 40 |
| `openai_gpt_3_5_turbo_0613` | OpenAI: GPT-3.5 Turbo (older v0613) | `openai/gpt-3.5-turbo-0613` | 33 |
| `openai_gpt_4` | OpenAI: GPT-4 | `openai/gpt-4` | 221 |
| `openai_gpt_4_1` | OpenAI: GPT-4.1 | `openai/gpt-4.1` | 15 |
| `openai_gpt_4_1_mini` | OpenAI: GPT-4.1 Mini | `openai/gpt-4.1-mini` | 19 |
| `openai_gpt_4_1_nano` | OpenAI: GPT-4.1 Nano | `openai/gpt-4.1-nano` | 10 |
| `openai_gpt_4o` | OpenAI: GPT-4o | `openai/gpt-4o` | 28 |
| `openai_gpt_4o_2024_05_13` | OpenAI: GPT-4o (2024-05-13) | `openai/gpt-4o-2024-05-13` | 49 |
| `openai_gpt_4o_2024_08_06` | OpenAI: GPT-4o (2024-08-06) | `openai/gpt-4o-2024-08-06` | 28 |
| `openai_gpt_4o_2024_11_20` | OpenAI: GPT-4o (2024-11-20) | `openai/gpt-4o-2024-11-20` | 28 |
| `openai_gpt_4o_mini` | OpenAI: GPT-4o-mini | `openai/gpt-4o-mini` | 11 |
| `openai_gpt_4o_mini_2024_07_18` | OpenAI: GPT-4o-mini (2024-07-18) | `openai/gpt-4o-mini-2024-07-18` | 11 |
| `openai_gpt_4o_mini_search_preview` | OpenAI: GPT-4o-mini Search Preview | `openai/gpt-4o-mini-search-preview` | 11 |
| `openai_gpt_4o_search_preview` | OpenAI: GPT-4o Search Preview | `openai/gpt-4o-search-preview` | 28 |
| `openai_gpt_4_turbo` | OpenAI: GPT-4 Turbo | `openai/gpt-4-turbo` | 98 |
| `openai_gpt_4_turbo_preview` | OpenAI: GPT-4 Turbo Preview | `openai/gpt-4-turbo-preview` | 98 |
| `openai_gpt_5` | OpenAI: GPT-5 | `openai/gpt-5` | 25 |
| `openai_gpt_5_1` | OpenAI: GPT-5.1 | `openai/gpt-5.1` | 25 |
| `openai_gpt_5_1_chat` | OpenAI: GPT-5.1 Chat | `openai/gpt-5.1-chat` | 25 |
| `openai_gpt_5_1_codex` | OpenAI: GPT-5.1-Codex | `openai/gpt-5.1-codex` | 25 |
| `openai_gpt_5_1_codex_max` | OpenAI: GPT-5.1-Codex-Max | `openai/gpt-5.1-codex-max` | 25 |
| `openai_gpt_5_1_codex_mini` | OpenAI: GPT-5.1-Codex-Mini | `openai/gpt-5.1-codex-mini` | 23 |
| `openai_gpt_5_2` | OpenAI: GPT-5.2 | `openai/gpt-5.2` | 39 |
| `openai_gpt_5_2_chat` | OpenAI: GPT-5.2 Chat | `openai/gpt-5.2-chat` | 39 |
| `openai_gpt_5_2_codex` | OpenAI: GPT-5.2-Codex | `openai/gpt-5.2-codex` | 39 |
| `openai_gpt_5_2_pro` | OpenAI: GPT-5.2 Pro | `openai/gpt-5.2-pro` | 463 |
| `openai_gpt_5_3_chat` | OpenAI: GPT-5.3 Chat | `openai/gpt-5.3-chat` | 39 |
| `openai_gpt_5_3_codex` | OpenAI: GPT-5.3-Codex | `openai/gpt-5.3-codex` | 39 |
| `openai_gpt_5_4` | OpenAI: GPT-5.4 | `openai/gpt-5.4` | 43 |
| `openai_gpt_5_4_mini` | OpenAI: GPT-5.4 Mini | `openai/gpt-5.4-mini` | 25 |
| `openai_gpt_5_4_nano` | OpenAI: GPT-5.4 Nano | `openai/gpt-5.4-nano` | 14 |
| `openai_gpt_5_4_pro` | OpenAI: GPT-5.4 Pro | `openai/gpt-5.4-pro` | 500 |
| `openai_gpt_5_5` | OpenAI: GPT-5.5 | `openai/gpt-5.5` | 86 |
| `openai_gpt_5_5_pro` | OpenAI: GPT-5.5 Pro | `openai/gpt-5.5-pro` | 500 |
| `openai_gpt_5_chat` | OpenAI: GPT-5 Chat | `openai/gpt-5-chat` | 25 |
| `openai_gpt_5_codex` | OpenAI: GPT-5 Codex | `openai/gpt-5-codex` | 25 |
| `openai_gpt_5_mini` | OpenAI: GPT-5 Mini | `openai/gpt-5-mini` | 23 |
| `openai_gpt_5_nano` | OpenAI: GPT-5 Nano | `openai/gpt-5-nano` | 6 |
| `openai_gpt_5_pro` | OpenAI: GPT-5 Pro | `openai/gpt-5-pro` | 330 |
| `openai_gpt_chat_latest` | OpenAI: GPT Chat Latest | `openai/gpt-chat-latest` | 86 |
| `latest_openai_gpt_latest` | OpenAI GPT Latest | `~openai/gpt-latest` | 86 |
| `latest_openai_gpt_mini_latest` | OpenAI GPT Mini Latest | `~openai/gpt-mini-latest` | 25 |
| `openai_gpt_oss_120b` | OpenAI: gpt-oss-120b | `openai/gpt-oss-120b` | 2 |
| `openai_gpt_oss_120b_free` | OpenAI: gpt-oss-120b (free) | `openai/gpt-oss-120b:free` | 1 |
| `openai_gpt_oss_20b` | OpenAI: gpt-oss-20b | `openai/gpt-oss-20b` | 2 |
| `openai_gpt_oss_20b_free` | OpenAI: gpt-oss-20b (free) | `openai/gpt-oss-20b:free` | 1 |
| `openai_gpt_oss_safeguard_20b` | OpenAI: gpt-oss-safeguard-20b | `openai/gpt-oss-safeguard-20b` | 2 |
| `openai_o1` | OpenAI: o1 | `openai/o1` | 184 |
| `openai_o1_pro` | OpenAI: o1-pro | `openai/o1-pro` | 500 |
| `openai_o3` | OpenAI: o3 | `openai/o3` | 15 |
| `openai_o3_deep_research` | OpenAI: o3 Deep Research | `openai/o3-deep-research` | 123 |
| `openai_o3_mini` | OpenAI: o3 Mini | `openai/o3-mini` | 11 |
| `openai_o3_mini_high` | OpenAI: o3 Mini High | `openai/o3-mini-high` | 11 |
| `openai_o3_pro` | OpenAI: o3 Pro | `openai/o3-pro` | 245 |
| `openai_o4_mini` | OpenAI: o4 Mini | `openai/o4-mini` | 11 |
| `openai_o4_mini_deep_research` | OpenAI: o4 Mini Deep Research | `openai/o4-mini-deep-research` | 15 |
| `openai_o4_mini_high` | OpenAI: o4 Mini High | `openai/o4-mini-high` | 11 |
| `openrouter_fusion` | OpenRouter: Fusion | `openrouter/fusion` | 1 |
| `openrouter_owl_alpha` | Owl Alpha | `openrouter/owl-alpha` | 1 |
| `openrouter_pareto_code` | Pareto Code Router | `openrouter/pareto-code` | 1 |
| `perceptron_perceptron_mk1` | Perceptron: Perceptron Mk1 | `perceptron/perceptron-mk1` | 15 |
| `perplexity_sonar` | Perplexity: Sonar | `perplexity/sonar` | 19 |
| `perplexity_sonar_deep_research` | Perplexity: Sonar Deep Research | `perplexity/sonar-deep-research` | 15 |
| `perplexity_sonar_pro` | Perplexity: Sonar Pro | `perplexity/sonar-pro` | 44 |
| `perplexity_sonar_pro_search` | Perplexity: Sonar Pro Search | `perplexity/sonar-pro-search` | 44 |
| `perplexity_sonar_reasoning_pro` | Perplexity: Sonar Reasoning Pro | `perplexity/sonar-reasoning-pro` | 15 |
| `poolside_laguna_m_1_free` | Poolside: Laguna M.1 (free) | `poolside/laguna-m.1:free` | 1 |
| `poolside_laguna_xs_2_free` | Poolside: Laguna XS.2 (free) | `poolside/laguna-xs.2:free` | 1 |
| `prime_intellect_intellect_3` | Prime Intellect: INTELLECT-3 | `prime-intellect/intellect-3` | 14 |
| `qwen_qwen_2_5_72b_instruct` | Qwen2.5 72B Instruct | `qwen/qwen-2.5-72b-instruct` | 11 |
| `qwen_qwen_2_5_coder_32b_instruct` | Qwen2.5 Coder 32B Instruct | `qwen/qwen-2.5-coder-32b-instruct` | 15 |
| `qwen_qwen_2_5_7b_instruct` | Qwen: Qwen2.5 7B Instruct | `qwen/qwen-2.5-7b-instruct` | 2 |
| `qwen_qwen2_5_vl_72b_instruct` | Qwen: Qwen2.5 VL 72B Instruct | `qwen/qwen2.5-vl-72b-instruct` | 16 |
| `qwen_qwen3_14b` | Qwen: Qwen3 14B | `qwen/qwen3-14b` | 2 |
| `qwen_qwen3_235b_a22b` | Qwen: Qwen3 235B A22B | `qwen/qwen3-235b-a22b` | 23 |
| `qwen_qwen3_235b_a22b_2507` | Qwen: Qwen3 235B A22B Instruct 2507 | `qwen/qwen3-235b-a22b-2507` | 2 |
| `qwen_qwen3_235b_a22b_thinking_2507` | Qwen: Qwen3 235B A22B Thinking 2507 | `qwen/qwen3-235b-a22b-thinking-2507` | 2 |
| `qwen_qwen3_30b_a3b` | Qwen: Qwen3 30B A3B | `qwen/qwen3-30b-a3b` | 11 |
| `qwen_qwen3_30b_a3b_instruct_2507` | Qwen: Qwen3 30B A3B Instruct 2507 | `qwen/qwen3-30b-a3b-instruct-2507` | 2 |
| `qwen_qwen3_30b_a3b_thinking_2507` | Qwen: Qwen3 30B A3B Thinking 2507 | `qwen/qwen3-30b-a3b-thinking-2507` | 9 |
| `qwen_qwen3_32b` | Qwen: Qwen3 32B | `qwen/qwen3-32b` | 2 |
| `qwen_qwen3_5_122b_a10b` | Qwen: Qwen3.5-122B-A10B | `qwen/qwen3.5-122b-a10b` | 24 |
| `qwen_qwen3_5_27b` | Qwen: Qwen3.5-27B | `qwen/qwen3.5-27b` | 16 |
| `qwen_qwen3_5_35b_a3b` | Qwen: Qwen3.5-35B-A3B | `qwen/qwen3.5-35b-a3b` | 13 |
| `qwen_qwen3_5_397b_a17b` | Qwen: Qwen3.5 397B A17B | `qwen/qwen3.5-397b-a17b` | 29 |
| `qwen_qwen3_5_9b` | Qwen: Qwen3.5-9B | `qwen/qwen3.5-9b` | 2 |
| `qwen_qwen3_5_flash_02_23` | Qwen: Qwen3.5-Flash | `qwen/qwen3.5-flash-02-23` | 2 |
| `qwen_qwen3_5_plus_02_15` | Qwen: Qwen3.5 Plus 2026-02-15 | `qwen/qwen3.5-plus-02-15` | 16 |
| `qwen_qwen3_5_plus_20260420` | Qwen: Qwen3.5 Plus 2026-04-20 | `qwen/qwen3.5-plus-20260420` | 20 |
| `qwen_qwen3_6_27b` | Qwen: Qwen3.6 27B | `qwen/qwen3.6-27b` | 29 |
| `qwen_qwen3_6_35b_a3b` | Qwen: Qwen3.6 35B A3B | `qwen/qwen3.6-35b-a3b` | 13 |
| `qwen_qwen3_6_flash` | Qwen: Qwen3.6 Flash | `qwen/qwen3.6-flash` | 14 |
| `qwen_qwen3_6_max_preview` | Qwen: Qwen3.6 Max Preview | `qwen/qwen3.6-max-preview` | 13 |
| `qwen_qwen3_6_plus` | Qwen: Qwen3.6 Plus | `qwen/qwen3.6-plus` | 23 |
| `qwen_qwen3_7_max` | Qwen: Qwen3.7 Max | `qwen/qwen3.7-max` | 30 |
| `qwen_qwen3_7_plus` | Qwen: Qwen3.7 Plus | `qwen/qwen3.7-plus` | 15 |
| `qwen_qwen3_8b` | Qwen: Qwen3 8B | `qwen/qwen3-8b` | 6 |
| `qwen_qwen3_coder_30b_a3b_instruct` | Qwen: Qwen3 Coder 30B A3B Instruct | `qwen/qwen3-coder-30b-a3b-instruct` | 2 |
| `qwen_qwen3_coder` | Qwen: Qwen3 Coder 480B A35B | `qwen/qwen3-coder` | 19 |
| `qwen_qwen3_coder_free` | Qwen: Qwen3 Coder 480B A35B (free) | `qwen/qwen3-coder:free` | 1 |
| `qwen_qwen3_coder_flash` | Qwen: Qwen3 Coder Flash | `qwen/qwen3-coder-flash` | 13 |
| `qwen_qwen3_coder_next` | Qwen: Qwen3 Coder Next | `qwen/qwen3-coder-next` | 12 |
| `qwen_qwen3_coder_plus` | Qwen: Qwen3 Coder Plus | `qwen/qwen3-coder-plus` | 13 |
| `qwen_qwen3_max` | Qwen: Qwen3 Max | `qwen/qwen3-max` | 25 |
| `qwen_qwen3_max_thinking` | Qwen: Qwen3 Max Thinking | `qwen/qwen3-max-thinking` | 25 |
| `qwen_qwen3_next_80b_a3b_instruct` | Qwen: Qwen3 Next 80B A3B Instruct | `qwen/qwen3-next-80b-a3b-instruct` | 13 |
| `qwen_qwen3_next_80b_a3b_instruct_free` | Qwen: Qwen3 Next 80B A3B Instruct (free) | `qwen/qwen3-next-80b-a3b-instruct:free` | 1 |
| `qwen_qwen3_next_80b_a3b_thinking` | Qwen: Qwen3 Next 80B A3B Thinking | `qwen/qwen3-next-80b-a3b-thinking` | 12 |
| `qwen_qwen3_vl_235b_a22b_instruct` | Qwen: Qwen3 VL 235B A22B Instruct | `qwen/qwen3-vl-235b-a22b-instruct` | 13 |
| `qwen_qwen3_vl_235b_a22b_thinking` | Qwen: Qwen3 VL 235B A22B Thinking | `qwen/qwen3-vl-235b-a22b-thinking` | 31 |
| `qwen_qwen3_vl_30b_a3b_instruct` | Qwen: Qwen3 VL 30B A3B Instruct | `qwen/qwen3-vl-30b-a3b-instruct` | 11 |
| `qwen_qwen3_vl_30b_a3b_thinking` | Qwen: Qwen3 VL 30B A3B Thinking | `qwen/qwen3-vl-30b-a3b-thinking` | 15 |
| `qwen_qwen3_vl_32b_instruct` | Qwen: Qwen3 VL 32B Instruct | `qwen/qwen3-vl-32b-instruct` | 10 |
| `qwen_qwen3_vl_8b_instruct` | Qwen: Qwen3 VL 8B Instruct | `qwen/qwen3-vl-8b-instruct` | 11 |
| `qwen_qwen3_vl_8b_thinking` | Qwen: Qwen3 VL 8B Thinking | `qwen/qwen3-vl-8b-thinking` | 14 |
| `qwen_qwen_plus` | Qwen: Qwen-Plus | `qwen/qwen-plus` | 12 |
| `qwen_qwen_plus_2025_07_28` | Qwen: Qwen Plus 0728 | `qwen/qwen-plus-2025-07-28` | 12 |
| `qwen_qwen_plus_2025_07_28_thinking` | Qwen: Qwen Plus 0728 (thinking) | `qwen/qwen-plus-2025-07-28:thinking` | 12 |
| `rekaai_reka_edge` | Reka Edge | `rekaai/reka-edge` | 2 |
| `rekaai_reka_flash_3` | Reka Flash 3 | `rekaai/reka-flash-3` | 2 |
| `relace_relace_apply_3` | Relace: Relace Apply 3 | `relace/relace-apply-3` | 20 |
| `relace_relace_search` | Relace: Relace Search | `relace/relace-search` | 14 |
| `undi95_remm_slerp_l2_13b` | ReMM SLERP 13B | `undi95/remm-slerp-l2-13b` | 13 |
| `sao10k_l3_1_70b_hanami_x1` | Sao10K: Llama 3.1 70B Hanami x1 | `sao10k/l3.1-70b-hanami-x1` | 11 |
| `sao10k_l3_1_euryale_70b` | Sao10K: Llama 3.1 Euryale 70B v2.2 | `sao10k/l3.1-euryale-70b` | 15 |
| `sao10k_l3_3_euryale_70b` | Sao10K: Llama 3.3 Euryale 70B | `sao10k/l3.3-euryale-70b` | 14 |
| `sao10k_l3_lunaris_8b` | Sao10K: Llama 3 8B Lunaris | `sao10k/l3-lunaris-8b` | 2 |
| `stepfun_step_3_5_flash` | StepFun: Step 3.5 Flash | `stepfun/step-3.5-flash` | 2 |
| `stepfun_step_3_7_flash` | StepFun: Step 3.7 Flash | `stepfun/step-3.7-flash` | 14 |
| `switchpoint_router` | Switchpoint Router | `switchpoint/router` | 18 |
| `tencent_hunyuan_a13b_instruct` | Tencent: Hunyuan A13B Instruct | `tencent/hunyuan-a13b-instruct` | 11 |
| `tencent_hy3_preview` | Tencent: Hy3 preview | `tencent/hy3-preview` | 2 |
| `thedrummer_cydonia_24b_v4_1` | TheDrummer: Cydonia 24B V4.1 | `thedrummer/cydonia-24b-v4.1` | 11 |
| `thedrummer_rocinante_12b` | TheDrummer: Rocinante 12B | `thedrummer/rocinante-12b` | 11 |
| `thedrummer_skyfall_36b_v2` | TheDrummer: Skyfall 36B V2 | `thedrummer/skyfall-36b-v2` | 14 |
| `thedrummer_unslopnemo_12b` | TheDrummer: UnslopNemo 12B | `thedrummer/unslopnemo-12b` | 11 |
| `upstage_solar_pro_3` | Upstage: Solar Pro 3 | `upstage/solar-pro-3` | 11 |
| `cognitivecomputations_dolphin_mistral_24b_venice_db66220940` | Venice: Uncensored (free) | `cognitivecomputations/dolphin-mistral-24b-venice-edition:free` | 1 |
| `microsoft_wizardlm_2_8x22b` | WizardLM-2 8x22B | `microsoft/wizardlm-2-8x22b` | 13 |
| `writer_palmyra_x5` | Writer: Palmyra X5 | `writer/palmyra-x5` | 12 |
| `x_ai_grok_4_20` | xAI: Grok 4.20 | `x-ai/grok-4.20` | 35 |
| `x_ai_grok_4_20_multi_agent` | xAI: Grok 4.20 Multi-Agent | `x-ai/grok-4.20-multi-agent` | 13 |
| `x_ai_grok_4_3` | xAI: Grok 4.3 | `x-ai/grok-4.3` | 35 |
| `x_ai_grok_build_0_1` | xAI: Grok Build 0.1 | `x-ai/grok-build-0.1` | 33 |
| `xiaomi_mimo_v2_5` | Xiaomi: MiMo-V2.5 | `xiaomi/mimo-v2.5` | 4 |
| `xiaomi_mimo_v2_5_pro` | Xiaomi: MiMo-V2.5-Pro | `xiaomi/mimo-v2.5-pro` | 14 |
| `xiaomi_mimo_v2_flash` | Xiaomi: MiMo-V2-Flash | `xiaomi/mimo-v2-flash` | 2 |
| `z_ai_glm_4_5` | Z.ai: GLM 4.5 | `z-ai/glm-4.5` | 31 |
| `z_ai_glm_4_5_air` | Z.ai: GLM 4.5 Air | `z-ai/glm-4.5-air` | 12 |
| `z_ai_glm_4_5v` | Z.ai: GLM 4.5V | `z-ai/glm-4.5v` | 25 |
| `z_ai_glm_4_6` | Z.ai: GLM 4.6 | `z-ai/glm-4.6` | 21 |
| `z_ai_glm_4_6v` | Z.ai: GLM 4.6V | `z-ai/glm-4.6v` | 13 |
| `z_ai_glm_4_7` | Z.ai: GLM 4.7 | `z-ai/glm-4.7` | 21 |
| `z_ai_glm_4_7_flash` | Z.ai: GLM 4.7 Flash | `z-ai/glm-4.7-flash` | 7 |
| `z_ai_glm_5` | Z.ai: GLM 5 | `z-ai/glm-5` | 26 |
| `z_ai_glm_5_1` | Z.ai: GLM 5.1 | `z-ai/glm-5.1` | 15 |
| `z_ai_glm_5_turbo` | Z.ai: GLM 5 Turbo | `z-ai/glm-5-turbo` | 26 |

## Ответ

```json
{
  "answer": "Текстовый ответ выбранной модели."
}
```

Если `send_answer = false`, результат не отправляется пользователю в чат, а сохраняется в переменную `{{tracker_answer}}`.
