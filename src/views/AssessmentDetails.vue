<template>
  <div>
    <div>
      <div class="d-flex lighten-3 pt-2 claimHeader">
        <p class="claimNumber align-center mt-3 mx-5">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="newClaim darken-3 mt-3 mx-5">NEW CLAIM</p>
        <v-spacer></v-spacer>
        <p class="viewDetails mt-3 mr-5">View Details</p>
      </div>
    </div>
    <div class="mt-3">
      <router-link to="/" style="text-decoration: none">
        <v-btn
          class="pa-5 mr-1 text-subtitle-2"
          elevation="0"
          id="notActiveBtn"
        >
          Claim Details</v-btn
        ></router-link
      >
      <v-btn class="pa-5" elevation="0" id="activeBtn">Assessment Sheet</v-btn>
      <v-divider class="mr-16"></v-divider>
    </div>

    <!-- Table Section-->
    <div class="d-flex my-5">
      <h2 class="pageHeader">Child Education Cover Assessment Sheets</h2>
      <v-spacer></v-spacer>
      <router-link to="/assessmentSheet" style="text-decoration: none">
        <v-btn id="img" class="white--text text-caption" color="#1EBBD9"
          ><v-icon>mdi-plus-box-outline</v-icon>
          <v-divider vertical class="mx-3 grey lighten-5"></v-divider>
          Add Assessment</v-btn
        ></router-link
      >
    </div>
    <!-- Table Data -->
    <div>
      <v-data-table
        id="table"
        hide-default-footer
        disable-sort
        :items="items"
        :headers="headers"
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-icon small class="black--text">mdi-dots-vertical</v-icon
          >{{ item.text }}
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Settlement: "Standard",
          Claim: "Cashless to the insured",
          Transaction: "Partial Payment",
          Disability: "0",
          Deductible: "11,600",
          Time: "11:00",
          Copay: "0",
          PerDay: "1500",
          Maxno: "6",
          Claimed: "24,000",
          Amount: "12,400",
          Net: "12,400",
          Total: "24,000",
          TotalNon: "11,600",
        },
        {
          Settlement: "Standard",
          Claim: "Cashless to the insured",
          Transaction: "Partial Payment",
          Disability: "0",
          Deductible: "11,600",
          Time: "11:00",
          Copay: "0",
          PerDay: "1500",
          Maxno: "6",
          Claimed: "24,000",
          Amount: "12,400",
          Net: "12,400",
          Total: "24,000",
          TotalNon: "11,600",
        },
      ],
      headers: [
        {
          text: "Action",
          align: "start",
          value: "action",
          class: "white--text",
          style: "",
          width: 50,
        },
        {
          text: "Settlement Type",
          value: "Settlement",
          class: "white--text",
          width: 150,
        },
        {
          text: "Claim Payment Type",
          value: "Claim",
          class: "white--text",
          width: 200,
        },
        {
          text: "Transaction Type",
          value: "Transaction",
          class: "white--text",
          width: 150,
        },
        {
          text: "Disability Amount",
          value: "Disability",
          class: "white--text",
          width: 150,
        },
        {
          text: "Deductible Amount",
          value: "Deductible",
          class: "white--text",
          width: 150,
        },
        {
          text: "Time Deductible (In Hours)",
          value: "Time",
          class: "white--text",
          width: 200,
        },
        {
          text: "Copay%",
          value: "Copay",
          class: "white--text",
          width: 50,
          border: 1,
        },
        {
          text: "Per Day Maximum",
          value: "PerDay",
          class: "white--text",
          width: 150,
        },
        {
          text: "Max no. of days Payable",
          value: "Maxno",
          class: "white--text",
          width: 200,
        },
        {
          text: "Claimed Amount",
          value: "Claimed",
          class: "white--text",
          width: 150,
        },
        {
          text: "Amount Payable",
          value: "Amount",
          class: "white--text",
          width: 150,
        },
        {
          text: "Net Payable",
          value: "Net",
          class: "white--text",
          width: 150,
        },
        {
          text: "Total Invoice Amount",
          value: "Total",
          class: "white--text",
          width: 150,
        },
        {
          text: "Total Non Payable Amount",
          value: "TotalNon",
          class: "white--text",
          width: 200,
        },
      ],
    };
  },
};
</script>

<style></style>
