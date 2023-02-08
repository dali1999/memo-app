import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [writeMode, setWriteMode] = useState(false);
  const [txt, setTxt] = useState("");

  const oriMemo = [
    {
      id: "1",
      memo: "안녕하세요",
    },
    {
      id: "2",
      memo: "제 이름은",
    },
    {
      id: "3",
      memo: "lkajwlidaliwdjoiawdliawdjliajdliajwd\nlijawildawlijdiawlidjailwjdliawjdilwajlidj",
    },
  ];

  const [memos, setMemos] = useState(oriMemo);
  const [idx, setIdx] = useState(4);

  const addMemo = () => {
    let a = { id: idx, memo: txt };
    setMemos((prev) => [...prev, a]);
    setWriteMode(false);
    setIdx((prev) => prev + 1);
  };

  const renderMemo = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          paddingBottom: 15,
          paddingTop: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        <Text style={{ marginRight: 10 }}>{item.id}</Text>
        <Text>{item.memo}</Text>
      </View>
    );
  };

  if (writeMode) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#9c0a",
          marginTop: 45,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{ padding: 15 }}
            onPress={() => setWriteMode(false)}
          >
            <Text style={{ fontSize: 18 }}>취소</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 15 }} onPress={() => addMemo()}>
            <Text style={{ fontSize: 18 }}>저장</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 10,
            }}
            onChangeText={(text) => setTxt(text)}
            multiline
          />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "tomato",
        marginTop: 45,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, padding: 15, textAlign: "center" }}>
          메모장
        </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            zIndex: 10,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: "tomato",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => setWriteMode(true)}>
              <Text style={{ color: "#fff", fontSize: 18 }}>글쓰기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList data={memos} renderItem={renderMemo} style={{ flex: 1 }} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
