---
trigger: always_on
---

# KB Porject guidline 

## Core Technologies
- TypeScript (strict mode)
- Next.js (App Router)
- React 18 with React Server Components (RSC)
- Tailwind CSS
- Biome for code formatting & linting

## Principles
All code must follow:
- SOLID
- KISS
- DRY
- Performance-aware design
- Clean, readable, maintainable architecture

## Project Architecture
### React Server Components (RSC)
- Use RSC by default.
- Switch to Client Components only if you need:
    - Hooks (useState, useEffect, etc.)
    - Browser APIs (window, localStorage, etc.)
    - Event handlers (onClick, onChange, etc.)
    - Third-party client-only libraries

### Folder Structure Rules
```
/app
  /feature
    page.tsx
    layout.tsx
    FeatureComponent.tsx
/components
  SharedComponent.tsx
/hooks
  useFeature.ts
/lib
  helpers.ts
/services
  featureService.ts
/data
  db.ts or repositories
```

### Where Logic Belongs
| Type	| Location |
| ---- | ---- |
| Rendering UI	| Components |
| Business Logic	| /services |
| Data Access / Fetching	| Server components, /data |
| Validation	| /lib/validators |
| Shared utilities	| /lib |

### File Naming Guidelines
| Type	| Location |
| ---- | ---- |
| Components	| PascalCase file name |
| Example: UserProfileCard.tsx |

### Pages
- Only use page.tsx and layout.tsx

### Hooks
- Inside /hooks
- Must begin with use
- Example: useUserProfile.ts

### Tests
- ComponentName.test.tsx

### Stories (optional)
- ComponentName.stories.tsx

### Naming Conventions

#### Components

PascalCase
UserCard, SidebarMenu

#### Variables & Functions

camelCase
getUserAsync, updateCart, fetchProfile

#### Booleans

Must start with:
is, has, can, should

Example:
isLoading, hasAccess, shouldDisplay

#### Avoid Abbreviations

❌ usr, cfg, btn
✔️ user, config, button

### TypeScript Standards

#### Props Interfaces

Each component must define a named interface:
```
export interface UserCardProps {
  user: User;
}
```

#### Avoid Inline Types

❌ Bad
```
function Card({ user }: { user: User }) {}
```

✔️ Good
```
export interface CardProps { user: User }
```

#### Prefer undefined over null

Use null only when dealing with external APIs.

#### Use Interfaces for Object Shapes

Use type only for:
- unions
- mapped types
- utility types

#### Throw errors in helpers/services

#### Catch at pages, layouts, or server actions

#### NEVER Swallow Errors

❌ Prohibited:
```
catch (err) { console.log(err); }
```

#### Client-Side Error Handling

Use error boundaries as needed.

#### Server Actions

Always return structured objects:
```
return { ok: false, error: "Invalid input" };
```

#### Async & Data Fetching

#### RSC First

Fetch data inside Server Components.

#### Async Naming

Functions must end with Async:
```
getUserAsync()
saveProfileAsync()
```

#### Avoid Fetching Inside Client Components

Unless absolutely necessary.

#### TailwindCSS Standards

#### Class Order

Use this class order:
```
layout → spacing → typography → decoration → state → custom
```

#### Example:
```
<div className="flex items-center gap-4 text-lg font-semibold text-gray-900 hover:text-blue-600" />
```

#### Avoid Excessive Nesting

Prefer simple structures.

#### Mobile-First

Use responsive classes as needed.

#### React Component Rules

#### Components Must Be Pure

No side effects inside JSX.

#### Extract Logic

❌ Bad
```
{list.filter(item => item.active).map(renderItem)}
```

✔️ Good
```
const activeItems = getActiveItems(list);
```

#### Minimal Inline Functions

Use useCallback only when performance-critical.

#### Avoid Global State

Prefer:

- local state
- context
- server actions

#### Component Template
"use client";

import { useState } from "react";

export interface ComponentNameProps {
  title: string;
  count?: number;
}

export default function ComponentName({ title, count = 0 }: ComponentNameProps) {
  const [value, setValue] = useState(count);

  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

#### State Management

Allowed:

- Local React state
- React context
- Server actions

Avoid:

- Redux
- Zustand (unless approved)

Global stores unless absolutely required

#### Biome (biomejs) Standards

#### Formatting

Biome must automatically format:

- 2 spaces
- semicolons
- import sorting
    - trailing commas
- consistent quotes

#### Violations

    Any code violating these standards will be:

- Commented with specific corrections
- Rejected until fully compliant