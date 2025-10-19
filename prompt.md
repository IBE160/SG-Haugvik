## Case Title
KidChef

## Background
Everyday stress makes dinner choices difficult. Kids want to participate, and parents want suggestions based on time, preferences, and what’s already in the fridge.

## Purpose
Build a web app that suggests dinners based on preferences and available ingredients, using kid-friendly language and step-by-step instructions.

## Target Users
Families and children ages 8–13 who want to choose dinner together—quickly and easily.

## Core Functionality

### Must Have (MVP)
- Choose preferences: “quick”, “something new”, “pasta”, “chicken”, “vegetarian”
- Generate 3–5 recipe suggestions (title, approx. time, steps)
- Save favorites
- Enter ingredients (text input—or optionally a checklist)
- User registration and authentication

### Nice to Have (Optional Extensions)
- Read-aloud recipe (TTS)
- “Cook with me” — step-by-step mode with large buttons/emoji
- Allergy filters (e.g., gluten, nuts, lactose) and dietary modes (vegetarian/vegan)
- Photo of the dish
- Weekly plan with export (PDF/print)


## Data Requirements
[What information needs to be stored and managed?]

- Users: id, name, email (optional), dietary preferences, createdAt
- Recipes (generated/saved): id, title, timeMin, tags, ingredients (have/missing), steps, imageUrl (optional), createdBy (userId), createdAt
- Pantry/Ingredients: userId, itemName, quantity (optional), lastUpdated
- Favorites: userId, recipeId, createdAt
- ShoppingList: userId, items[], lastUpdated


## User Stories (Optional)
[Brief scenarios describing how users will interact with the system]

1. As a parent, I want 3 quick suggestions based on what we already have at home.
2. As a child, I want to pick a category (“something easy”) and see a recipe with images/emoji.
3. As a family, we want to save favorites to find them again.
4. As a child, I want a big, simple “Cook with me” view that can read the steps aloud.

## Technical Constraints
[Any specific requirements or limitations]

- Responsive web (mobile/tablet/desktop)
- Require login only for saving favorites, pantry, and shopping list (not for viewing suggestions)
- Validate that at least one preference or one ingredient is provided
- Real-time UI (no full page refresh between steps)
- Kid-first accessibility: large touch targets, clear contrast, simple language

## Success Criteria
[How will you know the application is successful?]

- Users can get suggestions from inputs (preferences/ingredients)
- At least one recipe can be saved and appears in “Favorites”
- Shopping list is generated correctly (missing ≠ in pantry)
- Works well on mobile/tablet at the kitchen counter
- “Cook with me” flows smoothly with large buttons and optional TTS


