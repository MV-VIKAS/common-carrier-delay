<template>
  <v-app>
    <!-- ----------------------COMMON CARRIER DELAY --------------------------->

    <v-title>
      <h2 class="pageHeader pb-4">Add Details to Assessment Sheet</h2>
    </v-title>
    <!-- -------------------BASIC DETAILS-------------------------------- -->
    <template>
      <div class="containerSection">
        <div class="header" @click="show1 = !show1">
          <div>Basic Details</div>
          <v-spacer></v-spacer>

          <v-icon v-show="show1" color="#ffffff" class="white--text"
            >mdi-minus-box</v-icon
          >
          <v-icon v-show="!show1" color="#ffffff" class="white--text"
            >mdi-plus-box</v-icon
          >
        </div>
        <div v-show="show1">
          <v-form>
            <!-- ------------------------------ROW -1-------------------------------------- -->
            <v-layout wrap class="pt-4 form-group-container">
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Settlement Type </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>

              <v-flex class="form-group">
                <label class="form-label">
                  <b>Claim Payment Type </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Transaction Type </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Country Name </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Currency Name </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
               <v-flex class="form-group">
                <label class="form-label">
                  <b>Rate Of Exchange </b>
                  <span class="required">*</span>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  disabled
                  background-color="#EDEDED"

                ></v-text-field>
              </v-flex>

              <v-flex class="form-group">
                <label class="form-label">
                  <b>Rate Of Exchange Date </b>
                  <span class="required">*</span>
                </label>
                <v-menu
                  ref="menu4"
                  v-model="menu4"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                  
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="12/01/2021"
                      class="form-control rounded-0"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                      dense
                      outlined
                      disabled
                      background-color="#EDEDED"
                    >
                      <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-calendar </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date4" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu4 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu4.save(date4)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex class="form-group" style="margin-right:592px">
                <label class="form-label">
                  <b>ROE Updated Manually </b>
                  <span class="required">*</span>
                </label>
                <v-select
                  class="input"
                  placeholder="Preselected List Item"
                  solo
                  dense
                  outlined
                  disabled
                  background-color="#EDEDED"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>
    <!-- ------------------------------------Invoice Details--------------------- -->
    <template>
      <div class="containerSection">
        <div class="header" @click="show2 = !show2">
          <div>Invoice Details</div>
          <v-spacer></v-spacer>
          <v-icon v-show="show2" color="#ffffff" class="white--text"
            >mdi-minus-box</v-icon
          >
          <v-icon v-show="!show2" color="#ffffff" class="white--text"
            >mdi-plus-box</v-icon
          >
        </div>

        <div v-show="show2">
          <div class="ma-3">
            <b>Add Invoice Details</b>(At Least One Row Is Mandatory)
          </div>

          <v-card elevation="2" class="ma-3" flat>
            <v-data-table
              elevation="2"
              disable-sort
              hide-default-footer
              :items="item"
              :headers="headers"
            >
              <template v-slot:[`item.invoice`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>

              <template v-slot:[`item.invoicedate`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>

              <template v-slot:[`item.invoicedetails`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>

              <template v-slot:[`item.invoiceamount`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-3 "
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>

              <template v-slot:[`item.action`]="{ item }">
                <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
              </template>
            </v-data-table>
          </v-card>

          <div class="add-row-container">
            <span class="mr-3"
              ><v-icon color="#23B1A9" id="add-row-icon" > mdi-plus </v-icon></span
            >
            <span> Add Row </span>
          </div>

          <!-- -------------------------total invoice amount---------------------------- -->
          <v-form>
            <v-layout wrap class="form-group-container" style="width: 265px">
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Total Invoice Amount</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  disabled
                  background-color="#EDEDED"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>
    <!-- -----------------------------Amount Details--------------------------------------------- -->
    <template>
      <div class="containerSection">
        <div class="header" @click="show3 = !show3">
          <div>Amount Details</div>
          <v-spacer></v-spacer>
          <v-icon v-show="show3" color="#ffffff" class="white--text"
            >mdi-minus-box</v-icon
          >
          <v-icon v-show="!show3" color="#ffffff" class="white--text"
            >mdi-plus-box</v-icon
          >
        </div>

        <div v-show="show3">
          <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Time Deductible(In Hours)</b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>Deductible Amount</b> </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group">
                <label class="form-label"> <b>Copay%</b> </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Claimed Amount</b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Amount Payable</b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
               <v-flex class="form-group" >
                <label class="form-label"><b>Net Payable</b> </label>
                <v-text-field
                style="width: 270px"
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
           
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>

    <!-- -----------------------------Non- payable Expanses--------------------------------------------- -->
    <template>
      <div class="containerSection">
        <div class="header" @click="show4 = !show4">
          <div>Non Payable Expenses</div>
          <v-spacer></v-spacer>
          <v-icon v-show="show4" color="#ffffff" class="white--text"
            >mdi-minus-box</v-icon
          >
          <v-icon v-show="!show4" color="#ffffff" class="white--text"
            >mdi-plus-box</v-icon
          >
        </div>

        <div v-show="show4">
          <v-form>
            <v-layout wrap class="mx-3 pt-4">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-card class="npe-checkbox rounded-0" outlined elevation="1">
                <v-checkbox label="Non Payable Expense"> </v-checkbox>
              </v-card>
            </v-layout>
          </v-form>
          <!-- ------------------------------------NON payable Expense table--------------------- -->
          <v-card elevation="2" class="mx-2 mt-5" flat>
            <v-data-table
              elevation="2"
              id="table"
              disable-filtering
              disable-pagination
              disable-sort
              hide-default-footer
              :items="item"
              :headers="headers"
            >
              <template v-slot:[`item.invoice`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-4"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoicedate`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-4"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoicedetails`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-4"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.invoiceamount`]="{ item }">
                <v-text-field
                  label="1000"
                  outlined
                  dense
                  class="mt-4"
                  style="align-text: center"
                ></v-text-field
                >{{ item.text }}
              </template>
              <template v-slot:[`item.action`]="{ item }">
                <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
              </template>
            </v-data-table>
          </v-card>
          <div class="add-row-container">
            <span
              ><v-icon color="#23B1A9" id="add-row-icon-nonPayable"> mdi-plus </v-icon></span
            >
            <span class="add-row-content"> Add Row </span>
          </div>

          <!-- -------------------------total non payable amount---------------------------- -->
          <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex lg2 class="form-group">
                <label class="form-label">
                  <b>Total Non-Payable Amount</b>
                </label>
                <v-text-field
                  class="input"
                  label="Enter"
                  solo
                  dense
                  outlined
                  disabled
                  background-color="#EDEDED"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>
    <!-- ----------------------BUTTONS SECTION-------------------------------- -->
    <!-- --------------------------BUTTONS---------------------------------- -->
    <v-card flat>
      <v-layout class="py-4">
        <v-btn class="red--text mr-4 btnDanger" outlined
          ><v-icon>mdi-backspace-outline</v-icon
          ><v-divider vertical class="red mx-2 lighten-4"></v-divider>
          <span class="textField">Reset</span></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn class="red--text mr-4 btnDanger" outlined
          ><v-icon>mdi-backspace-outline</v-icon
          ><v-divider vertical class="red mx-2 lighten-4"></v-divider>
          <span class="textField">Cancel</span></v-btn
        >
        <router-link to="/assessmentDetails" style="text-decoration: none">
          <v-btn class="white--text btnSuccess" color="#23b1a9"
            ><v-icon class="icon">mdi-arrow-right-circle</v-icon
            ><v-divider vertical class="green mx-2 lighten-4"></v-divider>
            <span class="textField">Submit</span></v-btn
          >
        </router-link>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      headers: [
        {
          text: "Serial Number",
          align: "center",
          value: "serialn",
          class: " white--text",
          width: 130,
        },
        {
          text: "Invoice Number",
          value: "invoice",
          class: " white--text",
          align: "center",
          width: 154.5,
        },
        {
          text: "Invoice Date",
          value: "invoicedate",
          class: " white--text",
          width: 232.5,
          align: "center",
        },
        {
          text: "Invoice Details",
          value: "invoicedetails",
          class: " white--text",
          width: 416.5,
          align: "center",
        },
        {
          text: "Invoice Amount",
          value: "invoiceamount",
          class: " white--text",
          width: 180,
          align: "center",
        },
        {
          text: "Action",
          value: "action",
          class: " white--text",
          width: 165.5,
        },
      ],
      item: [
        {
          serialn: "002434234",
        },
      ],
    };
  },
};
</script>

<style>
/* table */
#table-head {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
#table-header {
  background-color: lightseagreen;
}
th {
  border: 0.2px solid grey;
  color: white;
}
td {
  border: 0.2px solid grey;
}
.table-input {
  border: 1px solid grey;
  margin-left: 30px;
  height: 30px;
  width: 150px;
}

.invoice-details {
  width: 450px;
}
.invoice-details-input {
  border: 1px solid;
  margin-left: 15px;
  height: 30px;
  width: 400px;
}
.add-row-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #23b1a9;
}
#add-row-icon-invoice,
#add-row-icon-nonPayable{
  font-size: 12px;
}

.npe-checkbox {
  display: flex;
  align-items: center;
  height: 40px;
  width: 242px;
  padding-left: 10px;
  border: 1px solid #c1c8cc;
}

</style>
