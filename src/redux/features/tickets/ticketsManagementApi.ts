import { baseApi } from "../../api/baseApi";

const ticketManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Fetch all tickets
    getAllTickets: builder.query({
      query: () => ({
        url: "/tickets",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    // ✅ Fetch a single ticket
    getSingleTicket: builder.query({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    // ✅ Update a ticket
    updateTicket: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Tickets"],
    }),

    // ✅ Delete a ticket
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
