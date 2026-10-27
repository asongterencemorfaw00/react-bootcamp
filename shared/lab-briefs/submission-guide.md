# Lab Submission Guide

## How to submit a lab

1. **Create your branch**
   ```bash
   git checkout -b feat/your-name/module-03
   ```

2. **Work in the starter folder**
   ```
   react/03-state/starter/src/
   ```

3. **Commit as you go** (Conventional Commits)
   ```bash
   git add .
   git commit -m "feat(lab-03): add cart state and addToCart function"
   git commit -m "feat(lab-03): implement removeFromCart and derived total"
   ```

4. **Push and open a PR**
   ```bash
   git push origin feat/your-name/module-03
   ```
   
   PR title: `feat(lab-03): shopping cart — Your Name`
   
   PR description:
   ```
   ## What I built
   [Brief description]
   
   ## What I learned
   [One or two things that clicked]
   
   ## What I'm still unsure about
   [Honest answer — this is safe to share]
   
   ## DoD checklist
   - [ ] Adding increments quantity if already in cart
   - [ ] Total recalculates automatically
   - [ ] Delete removes the correct item
   - [ ] Quantity cannot go below 1
   ```

5. **Request review** from your pair partner

6. **After submission** — check the solution:
   ```
   react/03-state/solution/src/
   ```

## Branch naming
```
feat/alice/module-01
feat/alice/module-02
feat/alice-bob/module-03   # if pair programming the lab
```

## PR rules
- One PR per lab per person
- Do not merge your own PR
- At least one review comment from your pair
- All DoD checkboxes ticked before requesting review
