import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
        id: 1,
        name: "Personal AI",
        description: "2024.11 - Personal AI with LLM by Groq API.",
        url: "https://oreoryza-ai.vercel.app/",
        img: "src/assets/personalAI.svg",
    },
    {
        id: 2,
        name: "Personal Blog",
        description: "2024.11 - Personal Blog with API.",
        url: "https://oreoryza-blog-lumos.vercel.app/blog",
        img: "src/assets/personalBlog.svg",
    },
    {
        id: 3,
        name: "Dsgnr.",
        description: "2024.12 - Design agency website with API",
        url: "https://oz-minimalist.vercel.app/",
        img: "src/assets/dsgnr.png",
    },
    {
        id: 4,
        name: "Exclusive",
        description: "2025.01 - Online shopping marketplace. (ft. Kevin Pangestu)",
        url: "https://exclusive-1.vercel.app/",
        img: "src/assets/exclusive.svg",
    },
  ],
  projectPreview:""
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectPreview: (state, action) => {
      state.projectPreview = action.payload;
    }
  }
})

export const {setProjectPreview} = projectSlice.actions;
export default projectSlice.reducer;