<template>
  <div>
    <div>
      <div class="claimHeader lighten-3">
        <p class="claimNumber align-center mt-3 mx-5">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="newClaim mt-3 mx-5">FEATURE CLAIM</p>
        <v-spacer></v-spacer>
        <p class="viewDetails mt-3 mr-5"><b>View Details</b></p>
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
      <h2 class="pageHeader">Common Carrier Delay Assessment Sheets</h2>
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
        <!-- Action type -->
        <template v-slot:[`item.action`]="{}">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon flat slot="activator" v-bind="attrs" v-on="on" left
                >mdi-dots-vertical</v-icon
              >
            </template>
            <v-list
              v-for="link in links"
              :key="link.text"
              style="border: 1px solid #c1c8cc"
            >
              <v-list-item style="min-height: 20px; width: 130px">
                <template v-if="link.text === 'Modify'">
                  <v-icon class="pr-3">mdi-{{ link.icon }}</v-icon>
                  <v-list-item-title class="teal--text">{{
                    link.text
                  }}</v-list-item-title>
                </template>
                <template v-else>
                  <v-icon class="pr-3">mdi-{{ link.icon }}</v-icon>
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "eye", text: "View" },
        { icon: "pencil-outline", text: "Modify" },
      ],
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
          width: 110,
        },
        {
          text: "Settlement Type",
          value: "Settlement",
          class: "white--text",
          width: 190,
        },
        {
          text: "Claim Payment Type",
          value: "Claim",
          class: "white--text",
          width: 190,
        },
        {
          text: "Transaction Type",
          value: "Transaction",
          class: "white--text",
          width: 165,
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
          width: 157,
        },
        {
          text: "Time Deductible (In Hours)",
          value: "Time",
          class: "white--text",
          width: 210,
        },
        {
          text: "Copay%",
          value: "Copay",
          class: "white--text",
          width: 100,
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

<style>
#listContainer {
  width: 150px;
  min-height: 15px;
}
</style>
