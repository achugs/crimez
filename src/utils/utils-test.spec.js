import dataFormatter from "./utils";



describe('Returns a new array with angles and labels', () => {
  it('Returns a new array with angles and labels when passed an array of crime', () => {
    const input = [{
      "category": "burglary",
      "location_type": "Force",
      "location": {
        "latitude": "53.479532",
        "street": {
          "id": 726074,
          "name": "On or near Hardman Street"
        },
        "longitude": "-2.250133"
      },
      "context": "",
      "outcome_status": {
        "category": "Investigation complete; no suspect identified",
        "date": "2017-02"
      },
      "persistent_id": "7e9a71e8f324ce20407c8bb6c85a60094a063debc1e178f3f962bc0a484bceb0",
      "id": 54963219,
      "location_subtype": "",
      "month": "2017-02"
    }]
    expect(dataFormatter(input)).toEqual([{ angle: 1, label: 'burglary' }])
  });
  it('Returns a new array with angles and labels when passed an array of crimes', () => {
    const input = [
      {
        "category": "burglary",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Investigation complete; no suspect identified",
          "date": "2017-02"
        },
        "persistent_id": "7e9a71e8f324ce20407c8bb6c85a60094a063debc1e178f3f962bc0a484bceb0",
        "id": 54963219,
        "location_subtype": "",
        "month": "2017-02"
      },
      {
        "category": "burglary",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Investigation complete; no suspect identified",
          "date": "2017-04"
        },
        "persistent_id": "dc62eae71017a3d94ccdc0a257781761c4b6f9f29c865a9e6af517e867c13028",
        "id": 54971807,
        "location_subtype": "",
        "month": "2017-02"
      },
      {
        "category": "theft-from-the-person",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Investigation complete; no suspect identified",
          "date": "2017-03"
        },
        "persistent_id": "6772898f5d8c046c10514dec8f47fcf07b9349c7061c480a19cdae6653626ab3",
        "id": 54957725,
        "location_subtype": "",
        "month": "2017-02"
      },
      {
        "category": "vehicle-crime",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Investigation complete; no suspect identified",
          "date": "2017-03"
        },
        "persistent_id": "5927c442c6b5aeb625974361689bf6e388edf96ec9ea5614742f243053afe919",
        "id": 54952698,
        "location_subtype": "",
        "month": "2017-02"
      },
      {
        "category": "vehicle-crime",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Investigation complete; no suspect identified",
          "date": "2017-03"
        },
        "persistent_id": "12b29e31fefe7d9c6b5f5fff9de9f9ccde059e0a8fc650caa6b9b1314f385cec",
        "id": 54961484,
        "location_subtype": "",
        "month": "2017-02"
      },
      {
        "category": "violent-crime",
        "location_type": "Force",
        "location": {
          "latitude": "53.479532",
          "street": {
            "id": 726074,
            "name": "On or near Hardman Street"
          },
          "longitude": "-2.250133"
        },
        "context": "",
        "outcome_status": {
          "category": "Offender given community sentence",
          "date": "2017-06"
        },
        "persistent_id": "2cd8b3d4ddc10c6ae1a40fb8d607ce94ab1aad71aa806b18c2d3c20eacb6d952",
        "id": 54945072,
        "location_subtype": "",
        "month": "2017-02"
      }
    ];
    expect(dataFormatter(input)).toEqual([{ angle: 2, label: 'burglary' }, { angle: 1, label: 'theft-from-the-person' }, { angle: 2, label: 'vehicle-crime' }, { angle: 1, label: 'violent-crime' }])
  });
});