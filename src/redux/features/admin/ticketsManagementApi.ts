import { baseApi } from "../../api/baseApi";

const TicketManagementApi = baseApi.injectEndpoints({
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
    createTicket: builder.mutation({
      query: (ticketData) => ({
        url: "/tickets",
        method: "POST",
        body: ticketData,
      }),
    }),
    updateTicket: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteTicket: builder.mutation({
      query: (id: string) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTicketsQuery,
  useGetSingleTicketQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
} = TicketManagementApi;
