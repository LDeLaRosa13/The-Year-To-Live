import { expect } from "chai";
import { sampleTrips } from "../src/trips-sample-data";
import { sampleTravelers } from "../src/travelers-sample-data";
import { sampleDestinations } from "../src/destination-sample-data";
import { getUserTrips } from "../src/travelData";

describe("collect users trips", () => {
  it("should be a function", () => {
    expect(typeof getUserTrips).to.equal("function");
  });

  it("should return trips that match user id", () => {
    const userTrips = getUserTrips(1, sampleTrips);
    expect(userTrips).to.deep.equal([
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: "2021/01/09",
        duration: 15,
        status: "approved",
        suggestedActivities: [],
      },
      {
        id: 166,
        userID: 1,
        destinationID: 7,
        travelers: 2,
        date: "2020/03/05",
        duration: 6,
        status: "approved",
        suggestedActivities: [],
      },
      {
        id: 173,
        userID: 1,
        destinationID: 9,
        travelers: 6,
        date: "2024/04/21",
        duration: 18,
        status: "pending",
        suggestedActivities: [],
      }
    ]);
  });
  it('should return an error message if parameters are not met', () => {
    const userTrips = getUserTrips(1);
    expect(userTrips).to.equal("Missing Information")
  })
});

