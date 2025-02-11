import { baseApi } from "../../api/baseApi";

const ticketManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => ({
        url: "/tickets",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    getSingleTicket: builder.query({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    updateTicket: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Tickets"],
    }),

    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tickets"],
    }),
  }),
});

export const {
  useGetAllTicketsQuery,
  useGetSingleTicketQuery,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
} = ticketManagementApi;
