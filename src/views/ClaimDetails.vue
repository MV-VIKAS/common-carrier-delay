<template>
  <div>
    <div>
      <div class="d-flex lighten-3 pt-2 claimHeader">
        <p class="claimNumber align-center mt-3 mx-5">
          Claim Number - 4340002739
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="newClaim mt-3 mx-5">NEW CLAIM</p>
        <v-spacer></v-spacer>
        <p class="viewDetails mt-3 mr-5">View Details</p>
      </div>
    </div>
    <div class="mt-3">
      <v-btn class="pa-5 mr-1 text-subtitle-2" id="activeBtn" elevation="0">
        Claim Details</v-btn
      >
      <router-link to="/add" style="text-decoration: none"
        ><v-btn outlined id="notActiveBtn" class="pa-5" elevation="0"
          >Assessment Sheet</v-btn
        ></router-link
      >
      <v-divider class="mr-16"></v-divider>
    </div>

    <!-- --------------------Common Carrier Delay -------------------------->
    <div class="homePageHeader my-4">Common Carrier Delay</div>

    <!-- ---------------------basic details ---------------------------->
    <template>
      <div class="container1">
        <div class="header" @click="hide = !hide">
          <span class="header-label-basiic">Basic Details </span
          ><v-spacer></v-spacer>
          <v-icon class="white--text" color="#ffffff" v-if="hide"
            >mdi-plus-box</v-icon
          >
          <v-icon class="white--text" color="#ffffff" v-if="!hide"
            >mdi-minus-box</v-icon
          >
        </div>
        <template v-if="!hide">
          <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Incident Details <span class="required">*</span></b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter"
                  solo
                  dense
                  outlined
                  :counter="50"
                
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group">
                <label class="form-label"> <b>PNR Number</b> </label>
                <v-text-field
                  class="input"
                  placeholder="Enter"
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"
                  ><b>From Country </b><span class="required">*</span>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter"
                  solo
                  dense
                  outlined
                  :counter="50"
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"
                  ><b>To Country</b> <span class="required">*</span>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter"
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>Delay Due To?</b></label>
                <v-select class="input" label="Select" solo dense outlined>
                </v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>Schedule Date</b> </label>
                <v-text-field
                  class="input"
                  placeholder="DD/MM/YYYY"
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-calendar</v-icon>
                  </template>
                </v-text-field>
              </v-flex>

              <v-flex class="form-group">
                <label class="form-label"> <b>Scheduled Time</b> </label>
                <v-select
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-clock</v-icon>
                  </template>
                </v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>Actual Date</b> </label>
                <v-text-field
                  class="input"
                  placeholder="DD/MM/YYYY"
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-calendar</v-icon>
                  </template>
                </v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>Actual Time</b> </label>
                <v-select
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-clock</v-icon>
                  </template>
                </v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>No of Hours Delay</b> </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group lg2">
                <label class="form-label">
                  <b>Is This An Accident Case?</b></label
                >
                <v-select
                  class="input"
                  placeholder="Yes"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </template>
      </div>
    </template>

    <!-- ----------------------------------Accident details----------------------------------- -->
    <template>
      <div class="container1">
        <div class="header" @click="hide1 = !hide1">
          <span class="header-label-accident">Accident Details</span
          ><v-spacer></v-spacer>
          <v-icon class="white--text" color="#ffffff" v-if="hide1"
            >mdi-plus-box</v-icon
          >
          <v-icon class="white--text" color="#ffffff" v-if="!hide1"
            >mdi-minus-box</v-icon
          >
        </div>
        <div v-if="!hide1">
          <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Name Of Accident <span class="required">*</span></b>
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
                  <b>Others <span class="required">*</span></b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group ">
                <label class="form-label"
                  ><b>FIR Registered</b> <span class="required">*</span></label
                >
                <v-card
                  class="radio-btn-card"
                  height="40%"
                  rounded="0"
                  outlined
                  elevation="2"
                >
                  <v-radio-group v-model="row" row class="radio-btn-grp">
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-card>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label">
                  <b>Reason For Not Intimating Police</b>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                  :counter="100"
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"
                  ><b>FIR/GD Number</b> <span class="required">*</span>
                </label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              </v-layout>


              <v-layout wrap class="form-group-container">
                <v-flex class="form-group">
                  <label class="form-label">
                    <b>FIR Date</b> <span class="required">*</span></label
                  >
                  <v-text-field
                    class="input"
                    placeholder="DD/MM/YYYY"
                    solo
                    dense
                    outlined
                  >
                    <template v-slot:prepend-inner class="mx-0">
                      <v-icon class="iconstyle">mdi-calendar</v-icon>
                    </template>
                  </v-text-field>
                </v-flex>
                <v-flex class="form-group">
                  <label class="form-label"
                    ><b>Police Station Name</b> <span class="required">*</span>
                  </label>
                  <v-text-field
                    class="input"
                    placeholder="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ">
                  <label class="form-label">
                    <b>Police Station Address Line 1</b></label
                  >
                  <v-text-field
                    class="input"
                    placeholder="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ">
                  <label class="form-label">
                    <b>Police Station Address Line 2</b></label
                  >
                  <v-text-field
                    class="input"
                    placeholder="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
              
              <v-flex class="form-group ">
                <label class="form-label">
                  <b>Police Station Address Line 3</b></label
                >
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
             </v-layout>
              <v-layout wrap class="form-group-container">
              <v-flex class="form-group">
                <label class="form-label"> <b>Pincode</b></label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>City</b></label>
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>District</b></label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group">
                <label class="form-label"> <b>State</b></label>
                <v-text-field
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group ">
                <label class="form-label"> <b>Phone</b></label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-phone</v-icon>
                  </template>
                </v-text-field>
              </v-flex>
              </v-layout>
               <v-layout wrap class="form-group-container">
              <v-flex class="form-group ">
                <label class="form-label"> <b>Email ID</b></label>
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                >
                  <template v-slot:prepend-inner class="mx-0">
                    <v-icon class="iconstyle">mdi-email</v-icon>
                  </template>
                </v-text-field>
              </v-flex>

              <v-flex class="form-group ">
                <label class="form-label">
                  <b>MLC</b><span class="red--text">*</span></label
                >
                <v-select
                  class="input"
                  placeholder="Select"
                  solo
                  dense
                  outlined
                ></v-select>
              </v-flex>
              <v-flex class="form-group ">
                <label class="form-label">
                  <b>MLC Number</b><span class="required">*</span></label
                >
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-3" style="width: 515px">
                <label class="form-label">
                  <b>Accident Description</b
                  ><span class="required">*</span></label
                >
                <v-text-field
                  class="input"
                  placeholder="Enter..."
                  solo
                  dense
                  outlined
                  :counter="100"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </div>
    </template>

    <!-- Buttons -->
    <v-card flat>
      <v-layout class="py-4">
        <v-btn class="red--text mr-4 btnDanger" outlined
          ><v-icon class="icon">mdi-backspace-outline</v-icon
          ><v-divider vertical class="red mx-2 lighten-4"></v-divider>
          <span class="textField">Reset</span></v-btn
        >

        <v-btn class="red--text mr-4 btnDanger" outlined
          ><v-icon class="icon">mdi-backspace-outline</v-icon
          ><v-divider vertical class="red mx-2 lighten-4"></v-divider>
          <span class="textField">Cancel</span></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn class="white--text btnSuccess" color="#23b1a9"
          ><v-icon class="icon">mdi-arrow-right-circle</v-icon
          ><v-divider vertical class="green mx-2 lighten-4"></v-divider>
          <span class="textField">Submit</span>
        </v-btn>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide1: false,
      hide: false,
    };
  },
};
</script>

<style scoped>
.radio-btn-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
}
.homePageHeader {
  color: #10242b;
  font-size: 18px;
  font-weight: bold; 
}
</style>
