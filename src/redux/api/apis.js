import { baseApi } from "./baseApi";

const allApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    getBlogs: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getBlog: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
    getProjects: build.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
    getProject: build.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetBlogsQuery,
  useGetBlogQuery,
  useGetProjectsQuery,
  useGetProjectQuery,
} = allApis;
