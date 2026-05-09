import { appColors } from '../../styles/appColors';
import { sizeText } from '../../styles/sizeText';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appColors.blue.dark,
    paddingTop: 60,
  },

  header: {
    height: 54,
    backgroundColor: appColors.blue.medium,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerLeftSpace: {
    width: 72,
  },

  headerButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle,
    fontWeight: '900',
    flex: 1,
    marginLeft: 4,
  },

  headerTitleCenter: {
    textAlign: 'center',
    marginLeft: 0,
    fontSize: sizeText.title,
  },

  headerActions: {
    width: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 140,
    backgroundColor: appColors.blue.dark,
  },

  professorContainer: {
    paddingTop: 18,
  },

  dayBlock: {
    marginBottom: 18,
  },

  dayTitle: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle,
    fontWeight: '900',
    marginBottom: 10,
  },

  card: {
    backgroundColor: appColors.blue.opaqueMedium,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
    marginBottom: 12,
    borderColor: appColors.gray[800],
    borderWidth: 1,
    minHeight: 180,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },

  timeBadge: {
    backgroundColor: appColors.blue.light,
    borderRadius: 7,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  timeText: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle,
    fontWeight: '900',
  },

  statusBadge: {
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  statusFinished: {
    backgroundColor: '#F87171',
  },

  statusProgress: {
    backgroundColor: '#22C55E',
  },

  statusPending: {
    backgroundColor: '#E5E7EB',
  },

  statusText: {
    fontSize: sizeText.subtitle,
    fontWeight: '900',
  },

  statusTextFinished: {
    color: '#FFFFFF',
  },

  statusTextProgress: {
    color: '#052E16',
  },

  statusTextPending: {
    color: '#111827',
  },

  subject: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle + 2,
    fontWeight: '900',
    marginBottom: 9,
    lineHeight: 16,
  },

  code: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle + 1,
    fontWeight: '900',
  },

  localLabel: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle + 1,
    fontWeight: '900',
    marginBottom: 2,
  },

  location: {
    color: appColors.gray[400],
    fontSize: sizeText.subtitle + 1,
    fontWeight: '500',
    lineHeight: 15,
  },

  professorCard: {
    backgroundColor: appColors.gray[950],
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: appColors.gray[800],
  },

  professorCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
  },

  professorTitleBox: {
    flex: 1,
    paddingRight: 14,
  },

  professorSubject: {
    color: appColors.blue.light,
    fontSize: sizeText.title,
    fontWeight: '900',
    lineHeight: 23,
    textTransform: 'uppercase',
  },

  professorCourse: {
    color: appColors.gray[300],
    fontSize: sizeText.descriptions,
    fontWeight: '500',
    marginTop: 10,
  },

  professorDivider: {
    height: 1,
    backgroundColor: appColors.gray[800],
  },

  professorInfoBox: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },

  professorInfoText: {
    color: appColors.gray[300],
    fontSize: sizeText.descriptions,
    fontWeight: '500',
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  professorInfoLabel: {
    color: appColors.gray[50],
    fontWeight: '900',
    textTransform: 'none',
  },
});