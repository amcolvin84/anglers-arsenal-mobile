# Fix: Git Ref "main" Does Not Exist

## The Problem
Your GitHub repository doesn't have a "main" branch - this happens when you upload files directly instead of using Git commands.

## Quick Fix - Check Your Branch Name

### Step 1: Find Your Actual Branch
1. **Go to your GitHub repository**: `anglers-arsenal-mobile`
2. **Look at the branch dropdown** (top left, near the file list)
3. **Note the branch name** - it's probably:
   - `master` (older default)
   - Or no branch created yet

### Step 2: Use Correct Git Ref in Expo
- If you see `master`: Use **`master`** as git ref
- If no branch visible: You need to create one

## Solution A: Use "master" Instead
In Expo build settings:
- **Git ref**: `master` (instead of main)
- **Platform**: Android
- **Build profile**: production

## Solution B: Create Main Branch (If Needed)
If your repository shows no branches:

1. **In GitHub, click "Create new file"**
2. **File name**: `README.md`
3. **Content**: `# Angler's Arsenal Mobile App`
4. **Commit message**: `Initial commit`
5. **Select "Create a new branch for this commit"**
6. **Branch name**: `main`
7. **Click "Commit new file"**

## Most Likely Solution
Your repository probably has a `master` branch instead of `main`. 

**In Expo, use `master` as your git ref.**

## Quick Test
Check your GitHub repository page - the branch name is shown in the dropdown near the green "Code" button.