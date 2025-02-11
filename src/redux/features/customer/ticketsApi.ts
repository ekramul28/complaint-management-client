import { baseApi } from "../../api/baseApi";

const TicketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => ({
        url: "/tickets",
        method: "GET",
      }),
    }),
    getSingleTicket: builder.query({
      query: (id: string) => ({
        url: `/tickets/${id}`,
        method: "GET",
      }),
    }),
    deleteSingleTicket: builder.mutation({
      query: (id: string) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
    }),
    updateSingleTicket: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllTicketsQuery,
  useGetSingleTicketQuery,
  useDeleteSingleTicketMutation,
  useUpdateSingleTicketMutation,
} = TicketsApi;
