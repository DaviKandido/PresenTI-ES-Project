import { appColors } from '@/styles/appColors';
import { sizeText } from '@/styles/sizeText';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B24',
    marginTop: 25,
  },

  containerContent: {
    paddingTop: 120,
    paddingBottom: 140,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  chamadaCard: {
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 24,
    overflow: 'hidden',
    paddingBottom: 10,
  },

  title: {
    color: 'white',
    fontSize: sizeText.title,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
  },

  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 10,
  },

  columnText: {
    color: '#C7C7C7',
    fontSize: 13,
  },

  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 18,
    paddingHorizontal: 20,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',

    backgroundColor: '#334AA8',
  },

  studentRowAbsent: {
    backgroundColor: '#9E3030',
  },

  studentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,

    flex: 1,
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 999,

    backgroundColor: '#F0E0FF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  studentName: {
    color: 'white',
    fontSize: 14,
    flexShrink: 1,
  },

  studentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  presenceText: {
    color: 'white',
    fontSize: 14,
  },

  percentText: {
    fontSize: 14,
    fontWeight: '700',
    width: 45,
    textAlign: 'right',
  },

  percentGreen: {
    color: '#64FF84',
  },

  percentRed: {
    color: '#FF2B2B',
  },

  legendContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 20,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  legendDot: {
    width: 14,
    height: 14,
    borderRadius: 999,
  },

  legendText: {
    color: '#8A8A8A',
    fontSize: 13,
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    gap: 15,
  },

  searchButton: {
    flex: 1,

    backgroundColor: '#161D33',

    paddingVertical: 18,

    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },

  saveButton: {
    width: 120,

    backgroundColor: '#2F7D32',

    paddingVertical: 18,

    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  listCardAluno: {
    maxHeight: 600,
  }

});
