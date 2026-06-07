---
name: project-rag-diagram
description: RAG pipeline flowchart created for Paola — covers embed, retrieve, augment, generate layers with styling
metadata:
  type: project
---

Created a top-down flowchart (`flowchart TD`) for a full RAG (Retrieval-Augmented Generation) pipeline on 2026-06-07. The diagram covers all steps: user query input, embedding model, query vector, vector similarity search, top-K chunk retrieval, augmented prompt construction, LLM generation, and grounded answer return.

Used four subgraphs (Embedding, Retrieval, Augmentation, Generation) with color-coded node styling. Key technology examples included inline (Pinecone, Weaviate, pgvector, GPT-4, Claude, Gemini, text-embedding-ada-002). Stadium shapes mark human-facing endpoints, cylinder marks the vector store, parallelogram marks the query vector.

Key structural choice: dual arrow into the Augmented Prompt node (user query + retrieved chunks both flow in) — this is the defining mechanic of RAG.

**Why:** User requested a clean, educational RAG flow diagram. User has solid AI/ML background so technical labels (cosine similarity, embedding model names, K parameter) were appropriate without over-explaining.

**How to apply:** If user asks for extensions, build on this existing structure:
- Document ingestion side-pipeline: add offline chunk → embed → upsert subgraph
- Hybrid retrieval: split Retrieval into BM25 sparse + dense parallel tracks merging before Top-K
- Multi-turn/memory: expand query node to include chat history compression before embedding
